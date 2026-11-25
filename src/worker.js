export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/timers") {
      const providedKey = request.headers.get("X-Sync-Key");
      if (!env.SYNC_SECRET || providedKey !== env.SYNC_SECRET) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      const storageKey = "solo_user_stopwatches";

      if (request.method === "GET") {
        const raw = await env.TIMERS_KV.get(storageKey);
        return new Response(raw || "[]", {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      if (request.method === "PUT") {
        let timers;
        try {
          timers = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (!Array.isArray(timers)) {
          return new Response(JSON.stringify({ error: "Expected an array" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        await env.TIMERS_KV.put(storageKey, JSON.stringify(timers));
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response("Method Not Allowed", { status: 405 });
    }

    return env.ASSETS.fetch(request);
  },
};