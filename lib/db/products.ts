import { getSupabaseAdmin } from "@/lib/db/client";

export interface ProductRow {
  id: string;
  slug: string;
  name: string;
  price_cents: number;
  currency: string;
  creem_product_id: string | null;
  asset_path: string;
  active: boolean;
}

export async function getProductBySlug(slug: string): Promise<ProductRow | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();
  if (error) throw error;
  return (data as ProductRow | null) ?? null;
}
