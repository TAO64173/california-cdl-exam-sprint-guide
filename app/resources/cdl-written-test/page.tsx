import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California CDL Written Test: Questions, Passing Score & Requirements",
  description:
    "The California CDL written test — what's on it, how many questions, the passing score, and how many attempts you get. Plus where to study.",
  alternates: { canonical: "/resources/cdl-written-test" },
};

const knowledgeTests = [
  { test: "General Knowledge", questions: "50", passing: "80% (40 correct)" },
  { test: "Air Brakes", questions: "25", passing: "80% (20 correct)" },
  { test: "Combination Vehicles", questions: "20", passing: "80% (16 correct)" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "California CDL Written Test",
      item: `${site.url}/resources/cdl-written-test`,
    },
  ],
};

export default function WrittenTestPage() {
  return (
    <ResourcePage
      title="California CDL Written Test"
      description="The California CDL written test — what's on it, how many questions, and the passing score."
      crumbs={[{ label: "Home", href: "/" }, { label: "California CDL Written Test" }]}
    >
      <JsonLd data={breadcrumbSchema} />

      <QuickAnswer
        question="What is the California CDL written test?"
        source="California Commercial Driver Handbook (DL-650)"
      >
        <p>
          It&apos;s a set of computer-based knowledge tests.{" "}
          <strong>General Knowledge has 50 questions</strong>, <strong>Air Brakes 25</strong>, and{" "}
          <strong>Combination Vehicles 20</strong>. Each requires <strong>80% to pass</strong>, and you
          get <strong>3 attempts</strong> per test.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">
          What the California CDL Written Test Is
        </h2>
        <p className="mt-3 text-ink-muted">
          The written test (also called the knowledge test or permit test) is the first step toward a
          California Commercial Driver&apos;s License. Passing it earns your Commercial Learner&apos;s
          Permit (CLP). The questions are drawn from the California Commercial Driver Handbook (DL-650).
        </p>
        <p className="mt-3 text-ink-muted">
          After you hold your CLP for <strong>14 days</strong>, you can take the skills test.
          Entry-Level Driver Training (ELDT) is required before the skills test (FMCSA).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Knowledge Tests You May Need</h2>
        <div className="mt-4 overflow-x-auto rounded-sm border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-display font-semibold">Test</th>
                <th className="px-4 py-3 font-display font-semibold">Questions</th>
                <th className="px-4 py-3 font-display font-semibold">Passing Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {knowledgeTests.map((row) => (
                <tr key={row.test}>
                  <td className="px-4 py-3 font-medium text-ink">{row.test}</td>
                  <td className="px-4 py-3 font-display font-bold tabular-nums text-navy">
                    {row.questions}
                  </td>
                  <td className="px-4 py-3 text-ink">{row.passing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Passing Score</h2>
        <p className="mt-3 text-ink-muted">
          Each knowledge test requires a passing score of <strong>80%</strong>. For General Knowledge,
          that&apos;s 40 of 50 correct; for Air Brakes, 20 of 25; for Combination Vehicles, 16 of 20.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How Many Attempts</h2>
        <p className="mt-3 text-ink-muted">
          You have <strong>three attempts</strong> to pass each knowledge test. If you fail the same test
          three times, your application is no longer valid and you must reapply. Check with the California
          DMV for current retesting requirements.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How to Prepare</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>Study the California Commercial Driver Handbook (DL-650).</li>
          <li>Understand which tests apply to your CDL class.</li>
          <li>
            Review the high-yield numbers — start with the{" "}
            <a href="/resources/cdl-air-brakes/psi" className="text-navy underline underline-offset-2">
              air brake PSI numbers
            </a>
            .
          </li>
          <li>Practice the concepts, not just memorized answers.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Requirements Before You Test</h2>
        <p className="mt-3 text-ink-muted">
          You&apos;ll take the written test at a California DMV office. Check the California DMV website
          for current application and documentation requirements.
        </p>
      </section>

      <RelatedLinks
        links={[
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
            question: "How many questions are on the California CDL written test?",
            answer:
              "General Knowledge has 50 questions, Air Brakes has 25, and Combination Vehicles has 20. Each requires 80% to pass.",
          },
          {
            question: "What score do you need to pass the California CDL test?",
            answer:
              "80% on each knowledge test. For General Knowledge, that's 40 of 50 correct.",
          },
          {
            question: "How many times can you take the California CDL written test?",
            answer:
              "Three attempts per knowledge test. After three failed attempts, your application is no longer valid and you must reapply.",
          },
          {
            question: "Is the California CDL written test the same as the permit test?",
            answer:
              "Yes. The written test is also called the knowledge test or permit test. Passing it earns your Commercial Learner's Permit (CLP).",
          },
          {
            question: "What tests do I need for a Class A CDL in California?",
            answer:
              "All applicants take General Knowledge. Class A applicants also take Combination Vehicles. If your vehicle has air brakes, you take the Air Brakes test too. Endorsement tests are separate.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
