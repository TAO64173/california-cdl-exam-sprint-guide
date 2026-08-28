import { track } from "@/lib/analytics";
import { getProductBySlug } from "@/lib/db/products";
import { getPaymentProvider } from "@/lib/payment";
import { PRODUCT_SLUG } from "@/lib/products";
import { site } from "@/lib/site";

// Creates a Creem hosted checkout and redirects the user. Server-side only —
// the Creem API key never reaches the browser. The Creem product id is read from
// `products.creem_product_id` (single source of truth), not from an env var or
// from client input — a client cannot request a different product.
export async function POST() {
  try {
    track({ name: "checkout_started" });

    const product = await getProductBySlug(PRODUCT_SLUG);
    if (!product?.creem_product_id) {
      return new Response("Checkout is not configured for this product.", { status: 503 });
    }

    const provider = getPaymentProvider();
    const result = await provider.createCheckout({
      productId: PRODUCT_SLUG,
      providerProductId: product.creem_product_id,
      successUrl: `${site.url}/success`,
    });

    track({ name: "checkout_redirected" });
    return Response.redirect(result.checkoutUrl, 303);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    // Temporary debug log: error message only. Never the full error object
    // (which could carry request headers/secrets), and never shown to the browser.
    console.error(`[checkout] error: ${message}`);
    return new Response("Checkout is temporarily unavailable. Please try again.", {
      status: 503,
    });
  }
}
