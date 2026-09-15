import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { product } from "@/content/product";
import { airBrakeFacts } from "@/content/resources/air-brakes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California CDL Study Guide: What to Study & How to Prepare",
  description:
    "How to study for the California CDL test — the high-frequency topics, the numbers to memorize, and a focused last-minute review approach.",
  alternates: { canonical: "/resources/cdl-study-guide" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "California CDL Study Guide",
      item: `${site.url}/resources/cdl-study-guide`,
    },
  ],
};

const studySteps = [
  {
    step: "Step 1",
    title: "Identify the tests you need",
    detail:
      "Every applicant takes General Knowledge. Class A adds Combination Vehicles; air-braked vehicles add Air Brakes. Endorsements add their own tests.",
  },
  {
    step: "Step 2",
    title: "Start with the official handbook",
    detail:
      "The California Commercial Driver Handbook (DL-650) is the source the test questions are drawn from. Use it as your base reference.",
  },
  {
    step: "Step 3",
    title: "Focus on high-value topics",
    detail:
      "Prioritize the areas that cause the most confusion — air brake numbers, following distance, and inspection checkpoints.",
  },
  {
    step: "Step 4",
    title: "Review numbers and rules",
    detail:
      "Lock in the exact figures and rules you'll be tested on, rather than re-reading everything.",
  },
  {
    step: "Step 5",
    title: "Practice",
    detail: "Check your understanding with practice questions, and review what you get wrong.",
  },
  {
    step: "Step 6",
    title: "Do a final focused review",
    detail:
      "Just before test day, review the high-value numbers and rules once more — not the entire handbook.",
  },
];

const highValueTopics = [
  "General Knowledge",
  "Air Brakes",
  "Pre-Trip Inspection",
  "Combination Vehicles",
  "Key numbers",
  "Common exam traps and easily confused concepts",
];

const keyNumbers = [
  { label: "Governor cut-out", value: airBrakeFacts.cutOut.value },
  { label: "Governor cut-in", value: airBrakeFacts.cutIn.value },
  { label: "Low air warning", value: airBrakeFacts.lowAirWarning.floor },
  { label: "Spring brakes", value: airBrakeFacts.springBrake.value },
];

export default function StudyGuidePage() {
  return (
    <ResourcePage
      title="California CDL Study Guide"
      description="How to study for the California CDL test — the high-frequency topics, the numbers to memorize, and a focused last-minute review approach."
      crumbs={[{ label: "Home", href: "/" }, { label: "California CDL Study Guide" }]}
    >
      <JsonLd data={breadcrumbSchema} />

      <QuickAnswer
        question="How should I study for the California CDL test?"
        source="California Commercial Driver Handbook (DL-650)"
      >
        <p>
          Start with the <strong>California Commercial Driver Handbook (DL-650)</strong>, identify
          which knowledge tests you need, focus on high-value topics, review the key numbers, practice
          the concepts, and do a focused last-minute review.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">
          How to Study for the California CDL Test
        </h2>
        <ol className="mt-4 space-y-4">
          {studySteps.map((s) => (
            <li key={s.step} className="flex gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-wide text-yellow-600">
                {s.step}
              </span>
              <div>
                <p className="font-medium text-ink">{s.title}</p>
                <p className="mt-1 text-sm text-ink-muted">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">High-Value Topics to Review</h2>
        <p className="mt-3 text-ink-muted">
          These are the areas worth prioritizing when you study:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          {highValueTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Numbers to Memorize</h2>
        <p className="mt-3 text-ink-muted">
          A few air brake numbers show up repeatedly. These are manufacturer-specified figures, so
          remember them as approximate values:
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {keyNumbers.map((n) => (
            <div
              key={n.label}
              className="flex items-center justify-between rounded-sm border border-line bg-paper px-4 py-3"
            >
              <span className="text-sm text-ink-muted">{n.label}</span>
              <span className="font-display font-bold tabular-nums text-navy">{n.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          See the full set of{" "}
          <a href="/resources/cdl-air-brakes/psi" className="text-navy underline underline-offset-2">
            air brake PSI numbers
          </a>{" "}
          and the{" "}
          <a
            href="/resources/cdl-air-brakes/low-air-warning"
            className="text-navy underline underline-offset-2"
          >
            low air warning threshold
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Why a Short Study Guide Can Help</h2>
        <p className="mt-3 text-ink-muted">
          The official DL-650 handbook is the complete reference — and a short guide is not a
          replacement for it. What a focused guide does well is:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>Concentrate the high-value numbers and rules in one place.</li>
          <li>Give you a fast review instead of re-reading a full handbook.</li>
          <li>Serve as a last-minute refresher right before test day.</li>
        </ul>
        <p className="mt-3 text-ink-muted">
          A short guide is a <strong>supplement</strong>, not a substitute for the official handbook.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">
          What&apos;s in the {product.name}
        </h2>
        <p className="mt-3 text-ink-muted">
          The {product.name} is a {product.pageCount}-page {product.format.toLowerCase()} built for
          last-minute review. It concentrates the areas that are easy to forget:
        </p>
        <p className="mt-3 font-display font-semibold text-navy">{product.tagline}</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>Key numbers — PSI, inches, feet, and percentages.</li>
          <li>Air brake rules and the pressure gradient.</li>
          <li>Pre-trip inspection checkpoints.</li>
          <li>Common exam traps and easily confused concepts.</li>
        </ul>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-written-test", label: "California CDL Written Test" },
          { href: "/resources/cdl-air-brakes/psi", label: "Air Brake PSI Numbers" },
          { href: "/resources/cdl-air-brakes/cut-out-pressure", label: "Cut-Out Pressure (125 PSI)" },
          { href: "/resources/cdl-air-brakes/cut-in-pressure", label: "Cut-In Pressure (100 PSI)" },
          { href: "/resources/cdl-air-brakes/low-air-warning", label: "Low Air Warning (55 PSI)" },
          { href: "/resources/cdl-air-brakes/leak-rate", label: "Air Brake Leak Rate" },
        ]}
      />

      <ResourceFaq
        items={[
          {
            question: "What is the best way to study for the California CDL test?",
            answer:
              "Start with the official DL-650 handbook, identify which tests you need, focus on high-value topics, review key numbers, practice, and do a focused final review.",
          },
          {
            question: "Do I need to read the whole California CDL handbook?",
            answer:
              "The handbook is the source of the test questions, so it's worth reviewing the sections that apply to you. A focused guide can help you review the high-value points without re-reading everything.",
          },
          {
            question: "What numbers do I need to memorize for the CDL test?",
            answer:
              "Air brake pressure values (cut-out, cut-in, low air warning, spring brakes), tire tread depth, following distance, and warning triangle placement are among the most common. See our Air Brake PSI page.",
          },
          {
            question: "Is a short study guide enough to pass?",
            answer:
              "No short guide can replace full preparation. A focused guide works best as a supplement and last-minute review — the official handbook remains your primary study source.",
          },
          {
            question: "What is the California CDL Exam Sprint Guide?",
            answer:
              "It's a 12-page PDF built for last-minute review. It concentrates the key numbers, air brake rules, pre-trip checkpoints, and exam traps in one place.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
