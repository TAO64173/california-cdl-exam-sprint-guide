"use client";

import { useEffect, useState } from "react";
import { getGtagClientId, track } from "@/lib/analytics";
import { product } from "@/content/product";

// Hosted-checkout trigger. A form POST to /api/checkout (server-side Creem key)
// — no secret exposure, no card inputs here. Tracks cta_click client-side and
// carries the GA4 client_id as a hidden field for server-side session stitching.
export default function CheckoutButton({ className }: { className?: string }) {
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    let mounted = true;
    getGtagClientId().then((id) => {
      if (mounted && id) setClientId(id);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <form action="/api/checkout" method="POST" className={className}>
      {clientId ? <input type="hidden" name="client_id" value={clientId} /> : null}
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
