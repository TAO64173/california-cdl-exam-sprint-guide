import CheckoutButton from "@/components/product/CheckoutButton";
import { product } from "@/content/product";
import { pricing } from "@/content/homepage";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-md">
          <div className="overflow-hidden rounded-sm border border-line bg-white">
            <div className="border-b border-line bg-navy p-6 text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-yellow">
                {pricing.kicker}
              </p>
              <h2 className="mt-2 font-display text-xl font-extrabold text-white">
                {product.name}
              </h2>
            </div>

            <div className="p-8 text-center">
              <p className="font-display text-5xl font-extrabold text-navy">{product.priceLabel}</p>
              <p className="mt-2 text-sm text-ink-muted">{pricing.note}</p>

              <ul className="mt-8 space-y-3 text-left">
                {product.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 font-display font-bold text-yellow-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <CheckoutButton className="mt-8" />
              <p className="mt-3 text-xs text-ink-muted">{product.billingNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
