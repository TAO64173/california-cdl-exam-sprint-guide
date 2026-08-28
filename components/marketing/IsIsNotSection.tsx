import SectionHeading from "@/components/ui/SectionHeading";
import { isIsNot } from "@/content/homepage";

function List({ title, items, tone }: { title: string; items: readonly string[]; tone: "is" | "not" }) {
  return (
    <div className="rounded-sm border border-line bg-white p-6">
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-navy">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-ink">
            <span className={tone === "is" ? "mt-0.5 font-display font-bold text-yellow-600" : "mt-0.5 font-display font-bold text-ink-muted"}>
              {tone === "is" ? "✓" : "✕"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IsIsNotSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker={isIsNot.kicker} heading={isIsNot.heading} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <List title={isIsNot.is.title} items={isIsNot.is.items} tone="is" />
          <List title={isIsNot.isNot.title} items={isIsNot.isNot.items} tone="not" />
        </div>
      </div>
    </section>
  );
}
