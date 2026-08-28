// Minimal in-memory rate limiter. Per-instance only — for a multi-instance
// deployment, replace with Upstash/Redis or a DB-backed limiter. Sufficient to
// blunt simple brute-force on the access endpoint in the MVP.

const hits = new Map<string, number[]>();

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 10;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}
