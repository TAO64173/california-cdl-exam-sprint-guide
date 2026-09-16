import { trackServer } from "@/lib/analytics-server";
import { getProductBySlug } from "@/lib/db/products";
import { getPaymentProvider } from "@/lib/payment";
import { PRODUCT_SLUG } from "@/lib/products";
import { site } from "@/lib/site";

// Reads the GA4 client_id from the form body. Best-effort: non-form content
// types (JSON, no content-type) fail to parse and simply yield no client_id —
// they must not block the checkout.
async function readClientId(request: Request): Promise<string | undefined> {
  try {
    const formData = await request.formData();
    return (formData.get("client_id") as string) || undefined;
  } catch {
    return undefined;
  }
}

// Creates a Creem hosted checkout and redirects the user. Server-side only —
// the Creem API key never reaches the browser. The Creem product id is read from
// `products.creem_product_id` (single source of truth), not from an env var or
// from client input — a client cannot request a different product.
export async function POST(request: Request) {
  try {
    const clientId = await readClientId(request);

    const product = await getProductBySlug(PRODUCT_SLUG);
    if (!product?.creem_product_id) {
      return new Response("Checkout is not configured for this product.", { status: 503 });
    }

    // GA4 server-side checkout_started — fire-and-forget; never blocks redirect.
    void trackServer("checkout_started", {
      product_slug: PRODUCT_SLUG,
      client_id: clientId ?? null,
    });

    const provider = getPaymentProvider();
    const result = await provider.createCheckout({
      productId: PRODUCT_SLUG,
      providerProductId: product.creem_product_id,
      successUrl: `${site.url}/success`,
      clientId,
    });

    return Response.redirect(result.checkoutUrl, 303);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[checkout] error: ${message}`);
    return new Response("Checkout is temporarily unavailable. Please try again.", {
      status: 503,
    });
  }
}
