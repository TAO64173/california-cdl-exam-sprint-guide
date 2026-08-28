import { getSupabaseAdmin } from "@/lib/db/client";

export type WebhookClaim = "new" | "processed" | "reprocess";

/**
 * Claim a webhook event for processing. Returns:
 *  - "new"       → first time we've seen this event; process it.
 *  - "processed" → already fully handled; safe to return 200 (idempotent no-op).
 *  - "reprocess" → seen before but not finished (partial failure); retry it.
 */
export async function claimWebhookEvent(input: {
  provider: string;
  providerEventId: string;
  eventType: string;
  payload: Record<string, unknown>;
}): Promise<WebhookClaim> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("webhook_events")
    .upsert(
      {
        provider: input.provider,
        provider_event_id: input.providerEventId,
        event_type: input.eventType,
        payload: input.payload,
        processed: false,
      },
      { onConflict: "provider,provider_event_id", ignoreDuplicates: true },
    )
    .select("id");
  if (error) throw error;

  if (data && data.length > 0) return "new";

  const { data: existing } = await supabase
    .from("webhook_events")
    .select("processed")
    .eq("provider", input.provider)
    .eq("provider_event_id", input.providerEventId)
    .maybeSingle();

  return existing?.processed ? "processed" : "reprocess";
}

export async function markWebhookEventProcessed(
  provider: string,
  providerEventId: string,
): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("webhook_events")
    .update({ processed: true })
    .eq("provider", provider)
    .eq("provider_event_id", providerEventId);
  if (error) throw error;
}
