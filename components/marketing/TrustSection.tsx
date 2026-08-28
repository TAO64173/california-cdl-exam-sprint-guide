import SectionHeading from "@/components/ui/SectionHeading";
import { trust } from "@/content/homepage";
import { product } from "@/content/product";

export default function TrustSection() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker={trust.kicker} heading={trust.heading} lead={trust.body} />
        <div className="mt-8 rounded-sm border border-line bg-white p-6">
          <p className="font-display text-base font-bold text-navy">
            California Commercial Driver Handbook (DL-650)
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{product.sourceNote}</p>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted">{trust.note}</p>
      </div>
    </section>
  );
}
