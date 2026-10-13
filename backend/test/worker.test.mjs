import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { after, test } from "node:test";
import { Miniflare } from "miniflare";

const config = JSON.parse(readFileSync("wrangler.jsonc", "utf8"));
const worker = new Miniflare({
  workers: [{
    config: {
      name: config.name,
      compatibilityDate: config.compatibility_date,
      manifest: {
        mainModule: "build/index.js",
        modules: {
          "build/index.js": {
            type: "esm",
            contents: readFileSync("build/index.js", "utf8"),
          },
          "build/index_bg.wasm": {
            type: "wasm",
            contents: new Uint8Array(readFileSync("build/index_bg.wasm")),
          },
        },
      },
    },
  }],
});

after(() => worker.dispose());

test("the Wasm Worker responds to health requests", async () => {
  for (const path of ["/", "/health", "/health?probe=ci"]) {
    const response = await worker.dispatchFetch(`http://localhost${path}`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("Content-Type"), /application\/json/);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert.deepEqual(await response.json(), {
      status: "ok",
      service: "climate-finance-navigator-backend",
      version: "0.1.0",
    });
  }
});

test("HEAD health checks return no body", async () => {
  const response = await worker.dispatchFetch("http://localhost/health", {
    method: "HEAD",
  });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "");
});

test("unknown routes return 404", async () => {
  const response = await worker.dispatchFetch("http://localhost/missing");
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: "Not found" });
});

test("unsupported health methods return 405 and allowed methods", async () => {
  const response = await worker.dispatchFetch("http://localhost/health", {
    method: "POST",
  });
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "GET, HEAD");
  assert.deepEqual(await response.json(), { error: "Method not allowed" });
});
