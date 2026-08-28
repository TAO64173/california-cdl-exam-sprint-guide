// Analytics event abstraction. Stable event + CTA names let a real provider
// (Plausible, GA4, …) be wired in later without renaming events. Analytics is
// observational only — it never determines order/access state.

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

// No-op for V1. Swap the body for a real provider without touching call sites.
export function track(_payload: AnalyticsPayload): void {
  // TODO: wire to the chosen analytics provider.
}
