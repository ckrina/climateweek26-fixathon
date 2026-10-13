# Backend

Rust Cloudflare Worker for Climate Finance Navigator. The `worker` crate handles
HTTP requests in Rust compiled to `wasm32-unknown-unknown`. `worker-build` generates
the Wasm module and JavaScript entrypoint in `build/`; Wrangler bundles and deploys
them to Cloudflare Workers.

## Local development

Install stable Rust through [rustup](https://rustup.rs/), Node.js 24, and Bun 1.4.2.
From this directory:

```sh
rustup target add wasm32-unknown-unknown
bun install --frozen-lockfile
bun run dev
```

Wrangler installs the pinned `worker-build` tool and builds Rust automatically.
The initial build takes longer because it installs build tooling. Open
`http://localhost:8787/health` to check the Worker.

`GET /` and `GET /health` return JSON containing `status`, `service`, and `version`.
Both support `HEAD`. Other paths return 404; unsupported methods on these routes
return 405 with an `Allow` header.

```sh
cargo fmt --all -- --check
cargo clippy --locked --target wasm32-unknown-unknown -- -D warnings
bun run build
bun run test
```

`bun run test` runs the built Rust Wasm in Miniflare and checks the health endpoint,
HEAD requests, and error responses. Run the build first.

`bun run build` performs a deployment dry run and writes the deployable bundle to
`dist/`, without uploading anything. Keep `Cargo.lock` and `bun.lock` committed.
Generated artifacts and local secrets are ignored.

## GitHub Actions deployment

The workflow in `.github/workflows/backend.yml` checks formatting, lints for the
Wasm target, builds the deployment bundle, and runs runtime tests for backend
changes on pull requests and pushes to `main`. Successful pushes to `main` deploy
the built Worker; a manual
run with **Run workflow** also deploys when `main` is selected.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`: a Cloudflare API token using the **Edit Cloudflare Workers**
  template, scoped to the target account.
- `CLOUDFLARE_ACCOUNT_ID`: the target Cloudflare account ID.

The Worker name is `climate-finance-navigator-backend`, configured in
`wrangler.jsonc`. It deploys to your account's `workers.dev` subdomain. Ensure that
subdomain is configured in Cloudflare before the first deployment.

For a manual deployment from this directory:

```sh
bunx wrangler login
bun run deploy
```

See Cloudflare's [Rust Worker guide](https://developers.cloudflare.com/workers/languages/rust/)
and [GitHub Actions guide](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/).
