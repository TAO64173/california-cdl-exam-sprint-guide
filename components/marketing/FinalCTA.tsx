import CtaButton from "@/components/ui/CtaButton";
import { finalCta } from "@/content/homepage";
import { product } from "@/content/product";

export default function FinalCTA() {
  return (
    <section className="bg-navy text-white">
      <div className="hazard-bar h-2" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{finalCta.supporting}</p>
        <div className="mt-8">
          <CtaButton href="/#pricing" cta="final_cta_get_guide" size="lg">
            {product.cta.primary}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
