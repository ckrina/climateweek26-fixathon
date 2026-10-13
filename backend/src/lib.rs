use serde::Serialize;
use worker::{event, Context, Env, Method, Request, Response, Result};

#[derive(Serialize)]
struct HealthResponse {
    status: &'static str,
    service: &'static str,
    version: &'static str,
}

#[derive(Serialize)]
struct ErrorResponse {
    error: &'static str,
}

#[event(fetch)]
pub async fn main(req: Request, _env: Env, _ctx: Context) -> Result<Response> {
    let path = req.path();
    if path != "/" && path != "/health" {
        return Ok(Response::from_json(&ErrorResponse { error: "Not found" })?.with_status(404));
    }

    if req.method() != Method::Get && req.method() != Method::Head {
        let mut response = Response::from_json(&ErrorResponse {
            error: "Method not allowed",
        })?
        .with_status(405);
        response.headers_mut().set("Allow", "GET, HEAD")?;
        return Ok(response);
    }

    let mut response = if req.method() == Method::Head {
        Response::empty()?
    } else {
        Response::from_json(&HealthResponse {
            status: "ok",
            service: env!("CARGO_PKG_NAME"),
            version: env!("CARGO_PKG_VERSION"),
        })?
    };
    response.headers_mut().set("Cache-Control", "no-store")?;
    Ok(response)
}
