import SectionHeading from "@/components/ui/SectionHeading";
import { problem } from "@/content/homepage";

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading kicker={problem.kicker} heading={problem.heading} />
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
          <p className="font-medium text-ink">{problem.lead}</p>
          {problem.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
