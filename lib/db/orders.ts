import { getSupabaseAdmin } from "@/lib/db/client";

export interface CreateOrderInput {
  providerOrderId: string;
  customerEmail: string;
  productId: string;
  amountCents: number;
  currency: string;
}

/** Idempotently create/update a paid order, keyed on (provider, provider_order_id). */
export async function upsertOrderPaid(input: CreateOrderInput): Promise<string> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("orders")
    .upsert(
      {
        provider: "creem",
        provider_order_id: input.providerOrderId,
        customer_email: input.customerEmail,
        product_id: input.productId,
        amount_cents: input.amountCents,
        currency: input.currency,
        status: "paid",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "provider,provider_order_id" },
    )
    .select("id")
    .single();
  if (error) throw error;
  if (!data) throw new Error("Failed to upsert order.");
  return data.id;
}

/** Transition an order to a terminal status; returns its internal id (or null). */
export async function setOrderStatus(
  providerOrderId: string,
  status: "refunded" | "failed",
): Promise<string | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("orders")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("provider", "creem")
    .eq("provider_order_id", providerOrderId)
    .select("id")
    .maybeSingle();
  if (error) throw error;
  return data?.id ?? null;
}
