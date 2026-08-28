import SectionHeading from "@/components/ui/SectionHeading";
import { keyNumbers } from "@/content/product";

export default function NumberShowcase() {
  return (
    <section id="numbers" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Key Numbers"
          heading="The Numbers You Don't Want to Forget"
          lead="A sample of the exact figures the guide locks in — PSI, inches, feet, and percentages, memorized cold."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyNumbers.map((n) => (
            <div
              key={n.value}
              className="rounded-sm border border-line border-l-4 border-l-yellow bg-white p-5"
            >
              <p className="font-display text-2xl font-extrabold tabular-nums text-navy">
                {n.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">{n.label}</p>
              <p className="mt-1 text-sm text-ink-muted">{n.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
