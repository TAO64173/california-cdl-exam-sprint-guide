import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CtaButton from "@/components/ui/CtaButton";
import { product } from "@/content/product";
import { hero } from "@/content/homepage";
import { assets } from "@/lib/assets";

const stats = [
  { value: String(product.pageCount), label: "Pages" },
  { value: "50+", label: "Key Numbers" },
  { value: "DL-650", label: "Aligned" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="hazard-bar h-2" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="yellow">{hero.badge}</Badge>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
              California CDL <span className="text-yellow">Exam Sprint Guide</span>
            </h1>
            <p className="mt-5 font-display text-lg font-semibold text-yellow sm:text-xl">
              {product.tagline}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              {hero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/#pricing" cta="hero_get_guide" size="lg">
                {product.cta.primary}
              </CtaButton>
              <Button href="/#inside" variant="outlineLight" size="lg">
                {product.cta.secondary}
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 text-xs uppercase tracking-[0.15em] text-white/50">
                    {s.label}
                  </dt>
                  <dd className="font-display text-2xl font-extrabold text-yellow">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-sm border border-white/10" aria-hidden="true" />
            <Image
              src={assets.cover.src}
              width={assets.cover.width}
              height={assets.cover.height}
              alt="California CDL Exam Sprint Guide — 12-page PDF cover"
              className="relative rounded-sm border border-white/10 shadow-2xl"
              priority
            />
            <p className="mt-3 text-center text-xs text-white/50">{hero.coverCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
