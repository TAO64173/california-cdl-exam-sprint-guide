// Analytics event abstraction. Stable event + CTA names let GA4 (or another
// provider) be wired in without renaming events. Analytics is observational
// only — it never determines order/access state.

export type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "preview_view"
  | "checkout_started"
  | "checkout_redirected"
  | "purchase_success"
  | "purchase_failed"
  | "access_granted"
  | "download_started"
  | "download_failed";

export type CtaName =
  | "hero_get_guide"
  | "pricing_get_guide"
  | "final_cta_get_guide"
  | "header_get_guide"
  | "preview_open";

export interface AnalyticsPayload {
  name: AnalyticsEventName;
  cta?: CtaName;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Sends a client-side GA4 event. No-ops on the server (where `window` is
// undefined) and when the GA4 snippet hasn't loaded. Server-side events
// (checkout/webhook/access) use `trackServer` from lib/analytics-server.
export function track(payload: AnalyticsPayload): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const { name, ...params } = payload;
  window.gtag("event", name, params);
}

// Reads the GA4 client_id (via gtag 'get') so server-side events can be stitched
// to the same user session. Resolves null when gtag or the measurement id is
// unavailable — never throws and never blocks.
export function getGtagClientId(): Promise<string | null> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      resolve(null);
      return;
    }
    const measurementId = process.env.NEXT_PUBLIC_GA_ID;
    if (!measurementId) {
      resolve(null);
      return;
    }
    let settled = false;
    const done = (value: string | null) => {
      if (!settled) {
        settled = true;
        resolve(value);
      }
    };
    try {
      window.gtag("get", measurementId, "client_id", (value: unknown) => {
        done(typeof value === "string" ? value : null);
      });
    } catch {
      done(null);
    }
    setTimeout(() => done(null), 1500);
  });
}
