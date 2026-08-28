import SectionHeading from "@/components/ui/SectionHeading";
import { howItWorks } from "@/content/homepage";

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker={howItWorks.kicker} heading={howItWorks.heading} />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <li key={step.number} className="rounded-sm border border-line bg-paper p-6">
              <span className="font-display text-3xl font-extrabold text-yellow-600">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
