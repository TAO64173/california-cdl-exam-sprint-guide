import crypto from "node:crypto";
import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "@/lib/payment/types";

const PROD_URL = "https://api.creem.io";
const TEST_URL = "https://test-api.creem.io";

function baseUrl(): string {
  return (
    process.env.CREEM_API_BASE_URL ??
    (process.env.NODE_ENV === "production" ? PROD_URL : TEST_URL)
  );
}

export class CreemPaymentProvider implements PaymentProvider {
  readonly id = "creem";

  async createCheckout(request: CheckoutRequest): Promise<CheckoutResult> {
    const apiKey = process.env.CREEM_API_KEY;
    if (!apiKey) {
      throw new Error("Creem is not configured (CREEM_API_KEY).");
    }

    const response = await fetch(`${baseUrl()}/v1/checkouts`, {
      method: "POST",
      headers: { "x-api-key": apiKey, "content-type": "application/json" },
      body: JSON.stringify({
        product_id: request.providerProductId,
        request_id: crypto.randomUUID(),
        success_url: request.successUrl,
        metadata: { product_slug: request.productId },
      }),
    });

    if (!response.ok) {
      throw new Error(`Creem checkout failed with status ${response.status}.`);
    }

    const checkout = (await response.json()) as { checkout_url?: string };
    if (!checkout.checkout_url) {
      throw new Error("Creem did not return a checkout URL.");
    }

    return { provider: this.id, checkoutUrl: checkout.checkout_url };
  }

  verifyWebhook(rawBody: string, signature: string): boolean {
    const secret = process.env.CREEM_WEBHOOK_SECRET;
    if (!secret || !signature) return false;

    const computed = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
    const a = Buffer.from(computed);
    const b = Buffer.from(signature);
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  }
}

/* ---------------------------------------------------------------------------
 * Webhook payload parsing (Creem-specific shapes, kept out of app code).
 * These use `unknown` + safe narrowing because the payload is untrusted input.
 * ------------------------------------------------------------------------- */

type JsonObject = Record<string, unknown>;

function asObject(value: unknown): JsonObject | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as JsonObject)
    : null;
}

export interface CompletedCheckoutEvent {
  orderId: string;
  email: string;
  amountCents: number;
  currency: string;
}

export function parseCheckoutCompleted(event: unknown): CompletedCheckoutEvent | null {
  const inner = asObject(asObject(event)?.object);
  if (!inner) return null;
  const order = asObject(inner.order);
  const customer = asObject(inner.customer);
  if (!order || !customer) return null;

  const orderId = typeof order.id === "string" ? order.id : null;
  const email = typeof customer.email === "string" ? customer.email : null;
  const amountCents = typeof order.amount === "number" ? order.amount : null;
  const currency = typeof order.currency === "string" ? order.currency : null;

  if (!orderId || !email || amountCents === null || !currency) return null;
  return { orderId, email, amountCents, currency };
}

/** Best-effort extraction of the Creem order id from a refund/dispute event. */
export function parseRefundOrDisputeOrderId(event: unknown): string | null {
  const inner = asObject(asObject(event)?.object);
  if (!inner) return null;

  const order = asObject(inner.order);
  if (order && typeof order.id === "string") return order.id;

  const transaction = asObject(inner.transaction);
  const txOrder = transaction?.order;
  if (typeof txOrder === "string") return txOrder;
  const txOrderObj = asObject(txOrder);
  if (txOrderObj && typeof txOrderObj.id === "string") return txOrderObj.id;

  return null;
}

/**
 * Build a stable, dedupable webhook idempotency key. Creem's top-level `event.id`
 * changes on manual Resend, so we key on the stable business id inside `object`
 * (order id for checkout.completed; refund/dispute id otherwise), prefixed by the
 * event type so distinct event types never collide.
 */
export function buildProviderEventId(eventType: string, event: unknown): string | null {
  const envelope = asObject(event);
  const inner = asObject(envelope?.object);

  let businessId: string | null = null;

  if (eventType === "checkout.completed") {
    const order = asObject(inner?.order);
    businessId = order && typeof order.id === "string" ? order.id : null;
  } else if (eventType === "refund.created" || eventType === "dispute.created") {
    businessId = inner && typeof inner.id === "string" ? inner.id : null;
  } else if (envelope && typeof envelope.id === "string") {
    // Unrecognized event (e.g. subscription.*): keep the top-level id so it still
    // records. These have no side effects, so their dedup key is not critical.
    businessId = envelope.id;
  }

  if (!businessId) return null;
  return `${eventType}:${businessId}`;
}
