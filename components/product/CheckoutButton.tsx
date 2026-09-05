"use client";

import { track } from "@/lib/analytics";
import { product } from "@/content/product";

// Hosted-checkout trigger. A form POST to /api/checkout (server-side Creem key)
// — no secret exposure, no card inputs here. Tracks cta_click client-side.
export default function CheckoutButton({ className }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST" className={className}>
      <button
        type="submit"
        onClick={() => track({ name: "cta_click", cta: "pricing_get_guide" })}
        className="w-full rounded-sm bg-yellow px-7 py-3.5 font-display text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
      >
        {product.cta.primary}
      </button>
    </form>
  );
}
