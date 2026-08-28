import { track } from "@/lib/analytics";
import { revokeEntitlementByOrderId, grantEntitlement } from "@/lib/db/entitlements";
import { setOrderStatus, upsertOrderPaid } from "@/lib/db/orders";
import { getProductBySlug } from "@/lib/db/products";
import {
  claimWebhookEvent,
  markWebhookEventProcessed,
} from "@/lib/db/webhookEvents";
import { getPaymentProvider } from "@/lib/payment";
import {
  buildProviderEventId,
  parseCheckoutCompleted,
  parseRefundOrDisputeOrderId,
} from "@/lib/payment/providers/creem";
import { PRODUCT_SLUG } from "@/lib/products";

async function processEvent(eventType: string, event: Record<string, unknown>): Promise<void> {
  if (eventType === "checkout.completed") {
    const completed = parseCheckoutCompleted(event);
    if (!completed) throw new Error("Malformed checkout.completed event.");

    const product = await getProductBySlug(PRODUCT_SLUG);
    if (!product) throw new Error("Product not found for checkout.");

    const orderId = await upsertOrderPaid({
      providerOrderId: completed.orderId,
      customerEmail: completed.email,
      productId: product.id,
      amountCents: completed.amountCents,
      currency: completed.currency,
    });
    await grantEntitlement({
      orderId,
      productId: product.id,
      customerEmail: completed.email,
    });
    track({ name: "purchase_success" });
    return;
  }

  if (eventType === "refund.created" || eventType === "dispute.created") {
    const providerOrderId = parseRefundOrDisputeOrderId(event);
    if (!providerOrderId) return; // unknown order — not one of ours

    const status = eventType === "refund.created" ? "refunded" : "failed";
    const orderId = await setOrderStatus(providerOrderId, status);
    if (orderId) await revokeEntitlementByOrderId(orderId);
    track({ name: "purchase_failed" });
    return;
  }

  // subscription.* and other events are ignored for a one-time product.
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("creem-signature") ?? "";

  const provider = getPaymentProvider();
  if (!provider.verifyWebhook(rawBody, signature)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return new Response("Invalid payload", { status: 400 });
  }

  const eventType = typeof event.eventType === "string" ? event.eventType : null;
  if (!eventType) {
    return new Response("Missing event type", { status: 400 });
  }

  const providerEventId = buildProviderEventId(eventType, event);
  if (!providerEventId) {
    return new Response("Missing event id", { status: 400 });
  }

  const claim = await claimWebhookEvent({
    provider: "creem",
    providerEventId,
    eventType,
    payload: event,
  });
  if (claim === "processed") {
    return new Response("OK", { status: 200 });
  }

  try {
    await processEvent(eventType, event);
    await markWebhookEventProcessed("creem", providerEventId);
  } catch {
    // Left unprocessed so Creem's retry (or manual resend) can recover.
    return new Response("Processing failed", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
