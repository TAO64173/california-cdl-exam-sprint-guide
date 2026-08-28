import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-only admin client using the service-role key. Never import this in a
// client component — the service role bypasses RLS and must stay server-side.
export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).");
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
