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
// (checkout/webhook/access) remain no-ops until Measurement Protocol is added.
export function track(payload: AnalyticsPayload): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const { name, ...params } = payload;
  window.gtag("event", name, params);
}
