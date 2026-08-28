import SectionHeading from "@/components/ui/SectionHeading";
import { audience } from "@/content/homepage";

export default function AudienceSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker={audience.kicker} heading={audience.heading} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <ul className="space-y-3">
            {audience.goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-ink">
                <span className="mt-1 font-display text-sm font-bold text-yellow-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-sm border border-line bg-white p-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-navy-700">
              Not For
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{audience.notFor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
