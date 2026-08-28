import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { product } from "@/content/product";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Preview",
  description:
    "Preview real pages from the California CDL Exam Sprint Guide — cover, key numbers, air brakes, and exam traps.",
  alternates: { canonical: "/preview" },
};

const pages = [
  { ...assets.cover, alt: "Cover page", caption: "Cover" },
  { ...assets.numbers, alt: "Key numbers page", caption: "Key Numbers" },
  { ...assets.airBrake, alt: "Air brake page", caption: "Air Brakes" },
  { ...assets.traps, alt: "Exam traps page", caption: "Exam Traps" },
];

export default function PreviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="max-w-2xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
          Preview
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Real Pages From the Guide
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          A sample of the 12-page guide. These are the actual pages, not mockups.
        </p>
      </header>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pages.map((p) => (
          <figure key={p.caption}>
            <div className="overflow-hidden rounded-sm border border-line bg-paper">
              <Image src={p.src} width={p.width} height={p.height} alt={p.alt} />
            </div>
            <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 rounded-sm border border-line bg-paper p-6 text-center">
        <p className="font-display text-lg font-bold text-navy">{product.name}</p>
        <p className="mt-1 text-sm text-ink-muted">{product.priceLabel} · one-time purchase</p>
        <div className="mt-5">
          <Button href="/#pricing" variant="primary" size="lg">
            {product.cta.primary}
          </Button>
        </div>
      </div>
    </div>
  );
}
