import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const resources = [
  {
    title: "California CDL Written Test",
    href: "/resources/cdl-written-test",
    description: "Explain the California CDL written test, knowledge tests, passing scores, and requirements.",
  },
  {
    title: "California CDL Study Guide",
    href: "/resources/cdl-study-guide",
    description: "A focused guide to what to study and which CDL topics deserve the most attention.",
  },
  {
    title: "California CDL Pre-Trip Inspection",
    href: "/resources/cdl-pre-trip",
    description: "Learn how the California CDL vehicle inspection test works and what to say during the inspection.",
  },
  {
    title: "CDL Air Brake Resources",
    href: "/resources/cdl-air-brakes/psi",
    description: "Quick-reference guides for CDL air brake PSI, pressure, warning, and leak-rate topics.",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Free Resources"
          heading="Free California CDL Study Resources"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="rounded-sm border border-line bg-white p-5 transition-colors hover:border-navy"
            >
              <p className="font-display text-base font-bold text-navy">{resource.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
