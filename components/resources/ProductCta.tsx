import Link from "next/link";
import { product } from "@/content/product";

// Single honest product CTA per resource page. No guaranteed-pass or DMV claims.
export default function ProductCta() {
  return (
    <aside className="mt-12 rounded-sm border border-line bg-navy p-6 text-white">
      <p className="font-display text-xs font-bold uppercase tracking-wide text-yellow">
        Need the numbers in one place?
      </p>
      <p className="mt-2 font-display text-lg font-bold">{product.name}</p>
      <p className="mt-1 text-sm text-white/70">{product.tagline}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-2xl font-extrabold text-yellow">
          {product.priceLabel}
        </span>
        <Link
          href="/#pricing"
          className="rounded-sm bg-yellow px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
        >
          Get the Guide
        </Link>
      </div>
    </aside>
  );
}
