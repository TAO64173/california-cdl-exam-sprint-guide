import SectionHeading from "@/components/ui/SectionHeading";
import { guideSections } from "@/content/product";

export default function FeatureGrid() {
  return (
    <section id="inside" className="scroll-mt-20 border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="What's Inside"
          heading="A Short, High-Density Review"
          lead="Five focused sections that cover the numbers, rules, and traps that decide a pass — nothing else."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guideSections.map((section, i) => (
            <article
              key={section.title}
              className="rounded-sm border border-line border-t-2 border-t-yellow bg-paper p-6"
            >
              <span className="font-display text-xs font-bold text-navy-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{section.description}</p>
            </article>
          ))}
          <article className="rounded-sm border border-dashed border-line bg-white p-6">
            <span className="font-display text-xs font-bold text-ink-muted">+</span>
            <h3 className="mt-3 font-display text-lg font-bold text-navy">Exam-Day Checklist</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              A last-24-hours countdown and final readiness checklist to walk in calm and prepared.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
