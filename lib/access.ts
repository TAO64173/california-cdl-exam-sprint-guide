import { trackServer } from "@/lib/analytics-server";
import { getSupabaseAdmin } from "@/lib/db/client";
import { getActiveEntitlement } from "@/lib/db/entitlements";
import { getProductBySlug } from "@/lib/db/products";
import { PRODUCT_SLUG } from "@/lib/products";

// Short-lived signed URL (seconds). Signed URLs are the only way the PDF leaves
// private storage — never a public/static URL.
const SIGNED_URL_TTL_SECONDS = 1800;

export type AccessResult = { url: string } | { error: string; status: number };

/**
 * Access layer: verify an active entitlement, then mint a temporary signed URL
 * to the private PDF. This is the only path to the product file.
 */
export async function grantAccess(
  customerEmail: string,
  clientId?: string | null,
): Promise<AccessResult> {
  const product = await getProductBySlug(PRODUCT_SLUG);
  if (!product) {
    return { error: "This product is currently unavailable.", status: 404 };
  }

  const entitlement = await getActiveEntitlement(customerEmail, product.id);
  if (!entitlement) {
    return { error: "We couldn't find an active purchase for this email.", status: 403 };
  }

  const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "private-products";
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(product.asset_path, SIGNED_URL_TTL_SECONDS);

  if (error || !data?.signedUrl) {
    console.error("[ACCESS_ERROR]", error);
    return { error: "Unable to prepare your download. Please try again.", status: 500 };
  }

  await trackServer("access_granted", { product_slug: PRODUCT_SLUG, client_id: clientId ?? null });
  return { url: data.signedUrl };
}
