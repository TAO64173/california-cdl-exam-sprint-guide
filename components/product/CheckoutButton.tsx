import { product } from "@/content/product";

// Hosted-checkout trigger. A plain form POST to /api/checkout (server-side
// Creem key) — no client JS, no secret exposure, no card inputs here.
export default function CheckoutButton({ className }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST" className={className}>
      <button
        type="submit"
        className="w-full rounded-sm bg-yellow px-7 py-3.5 font-display text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
      >
        {product.cta.primary}
      </button>
    </form>
  );
}
