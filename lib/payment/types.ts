// Payment domain models + provider contract. Creem is only a provider; order,
// entitlement, and access live in Supabase and do not depend on any provider.

export type ProductStatus = "active" | "inactive";
export type OrderStatus = "pending" | "paid" | "failed" | "refunded";
export type EntitlementStatus = "active" | "revoked" | "expired";

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Integer cents (e.g. 999 = $9.99). */
  priceCents: number;
  currency: string;
  creemProductId: string | null;
  /** Supabase private-storage path — never a public URL. */
  assetPath: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  productId: string;
  /** Customer email captured by the provider at checkout. */
  email: string;
  /** Integer cents. */
  amountCents: number;
  currency: string;
  status: OrderStatus;
  provider: string;
  providerOrderId: string;
  createdAt: string;
}

export interface Entitlement {
  id: string;
  orderId: string;
  productId: string;
  email: string;
  status: EntitlementStatus;
  createdAt: string;
  /** null for one-time purchases. */
  expiresAt: string | null;
}

export interface CheckoutRequest {
  /** Our product slug (tracking/metadata only). */
  productId: string;
  /** Provider-specific product reference (Creem product id), resolved from the DB. */
  providerProductId: string;
  successUrl: string;
}

export interface CheckoutResult {
  provider: string;
  /** Hosted checkout URL the user is redirected to. */
  checkoutUrl: string;
}

/**
 * A swappable payment provider (Creem, Polar, …). Implement this per provider;
 * the rest of the app depends only on this contract.
 */
export interface PaymentProvider {
  readonly id: string;
  createCheckout(request: CheckoutRequest): Promise<CheckoutResult>;
  /** Verify an inbound webhook against its signature (timing-safe). */
  verifyWebhook(rawBody: string, signature: string): boolean;
}
