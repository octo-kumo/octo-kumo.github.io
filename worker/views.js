// views.js — Cloudflare Worker page-view counter for yun.ng + v2.yun.ng
//
// Drop-in replacement for src/index.ts (plain JS, no build step).
// Deploy: paste into the views.yun.ng Worker (module syntax), keep bindings:
//   env.DB                          → D1 database with table:
//       CREATE TABLE page_views (path TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0);
//   env.MAINTENANCE_BLOCKER         → Rate limiting binding (any IP → 1337 mode when blocked)
//   env.TOTAL_RATE_LIMITER          → Rate limiting binding (per-IP global cap)
//   env.PAGE_RATE_LIMITER           → Rate limiting binding (per-IP per-path cap)
//
// API: GET https://views.yun.ng/<path>  →  { "count": N }   (increments, subject to rate limits)
// CORS: reflects Origin when it is https://yun.ng or https://v2.yun.ng (both sites can call it).

const ALLOWED_ORIGINS = ["https://yun.ng", "https://v2.yun.ng"];

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
    };
  }
  return {};
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    let path = url.pathname || "/";
    if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);

    const ip = request.headers.get("cf-connecting-ip") || "unknown";

    const maintenanceBlocker = await env.MAINTENANCE_BLOCKER.limit({ key: ip });
    if (!maintenanceBlocker.success) {
      return new Response(JSON.stringify({ count: 1337 }), {
        headers: { "content-type": "application/json", ...cors },
      });
    }

    let increment = true;
    const global = await env.TOTAL_RATE_LIMITER.limit({ key: ip });
    if (!global.success) increment = false;
    const pageLimit = await env.PAGE_RATE_LIMITER.limit({ key: `${ip}:${path}` });
    if (!pageLimit.success) increment = false;

    if (!increment) {
      const row = await env.DB.prepare("SELECT count FROM page_views WHERE path = ?")
        .bind(path)
        .first();
      const current = row?.count ?? 0;
      return new Response(JSON.stringify({ count: current }), {
        headers: { "Content-Type": "application/json", ...cors },
      });
    }

    const upsert = await env.DB.prepare(`
INSERT INTO page_views (path, count)
VALUES (?, 1)
ON CONFLICT(path) DO UPDATE
SET count = page_views.count + 1
RETURNING count;`)
      .bind(path)
      .first();
    const next = upsert?.count ?? 0;

    return new Response(JSON.stringify({ count: next }), {
      headers: { "Content-Type": "application/json", ...cors },
    });
  },
};
