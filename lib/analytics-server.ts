import { randomUUID } from "node:crypto";

// Server-only GA4 Measurement Protocol helper. Never import this in a client
// component — GA4_API_SECRET must stay server-side and out of the browser bundle.

const MP_ENDPOINT = "https://www.google-analytics.com/mp/collect";
const TIMEOUT_MS = 1500;

export interface ServerEventParams {
  product_slug: string;
  client_id?: string | null;
}

// Sends a server-side GA4 event via Measurement Protocol. No-ops when the env is
// missing, and never throws — GA4 is a bypass and must not affect business logic.
export async function trackServer(name: string, params: ServerEventParams): Promise<void> {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return;

  const payload = {
    client_id: params.client_id || randomUUID(),
    events: [{ name, params: { product_slug: params.product_slug } }],
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    await fetch(
      `${MP_ENDPOINT}?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      },
    );
  } catch {
    // Swallow — tracking failures must never affect checkout/webhook/access.
  } finally {
    clearTimeout(timeout);
  }
}
