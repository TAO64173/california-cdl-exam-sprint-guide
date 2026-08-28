import { getSupabaseAdmin } from "@/lib/db/client";

/** Grant (idempotently, keyed on order_id) an active entitlement for an order. */
export async function grantEntitlement(input: {
  orderId: string;
  productId: string;
  customerEmail: string;
}): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("entitlements").upsert(
    {
      order_id: input.orderId,
      product_id: input.productId,
      customer_email: input.customerEmail,
      status: "active",
      updated_at: new Date().toISOString(),
    },
    { onConflict: "order_id" },
  );
  if (error) throw error;
}

/** Revoke an entitlement after refund/dispute. */
export async function revokeEntitlementByOrderId(orderId: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("entitlements")
    .update({ status: "revoked", updated_at: new Date().toISOString() })
    .eq("order_id", orderId);
  if (error) throw error;
}

/** Find an active entitlement for a customer + product (the access gate). */
export async function getActiveEntitlement(
  customerEmail: string,
  productId: string,
): Promise<{ id: string } | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("entitlements")
    .select("id")
    .eq("customer_email", customerEmail)
    .eq("product_id", productId)
    .eq("status", "active")
    .maybeSingle();
  if (error) throw error;
  return (data as { id: string } | null) ?? null;
}
