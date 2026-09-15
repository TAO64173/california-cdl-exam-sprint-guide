import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California CDL Pre-Trip Inspection: What to Check & What to Say",
  description:
    "How the California CDL pre-trip (vehicle) inspection works — what to check, how it's scored, and what to say to the examiner.",
  alternates: { canonical: "/resources/cdl-pre-trip" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "California CDL Pre-Trip Inspection",
      item: `${site.url}/resources/cdl-pre-trip`,
    },
  ],
};

const inspectionAreas = [
  "Engine compartment",
  "In-cab",
  "Steering",
  "Suspension",
  "Brakes",
  "Tires and wheels",
  "Lights and reflectors",
  "Coupling system",
  "Emergency equipment",
];

const federalNumbers = [
  { item: "Brake lining (minimum)", standard: "1/4 inch", source: "49 CFR §393.47" },
  { item: "Steer tire tread (minimum)", standard: "4/32 inch", source: "49 CFR §393.75" },
  { item: "Other tire tread (minimum)", standard: "2/32 inch", source: "49 CFR §393.75" },
  { item: "Slack adjuster pushrod (maximum)", standard: "1 inch", source: "49 CFR §393.47" },
];

export default function PreTripPage() {
  return (
    <ResourcePage
      title="California CDL Pre-Trip Inspection"
      description="How the California CDL pre-trip (vehicle) inspection works — what to check, how it's scored, and what to say to the examiner."
      crumbs={[{ label: "Home", href: "/" }, { label: "California CDL Pre-Trip Inspection" }]}
    >
      <JsonLd data={breadcrumbSchema} />

      <QuickAnswer
        question="What is the California CDL pre-trip inspection?"
        source="California Commercial Driver Handbook (DL-650)"
      >
        <p>
          It&apos;s the <strong>first of three parts of the CDL skills test</strong>. You inspect the
          vehicle by <strong>naming, pointing to/touching, and explaining</strong> each component from
          memory. It&apos;s scored <strong>pass/fail</strong>.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">
          What the California CDL Pre-Trip Inspection Is
        </h2>
        <p className="mt-3 text-ink-muted">
          The pre-trip (vehicle) inspection is the first of three parts of the California CDL skills
          test, along with basic vehicle control and the on-road driving test. You walk the examiner
          around the vehicle to show you know whether it&apos;s safe to drive.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">
          How the Vehicle Inspection Test Works
        </h2>
        <p className="mt-3 text-ink-muted">
          The inspection is <strong>verbal and hands-on</strong>, and you perform it{" "}
          <strong>from memory</strong> — no notes or checklists once the test begins. It is scored{" "}
          <strong>pass/fail</strong>, not by percentage.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What You Need to Do</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>
            <strong>Name</strong> each component, <strong>point to or touch</strong> it, and{" "}
            <strong>explain</strong> what you&apos;re checking and why. If you don&apos;t, you get no
            credit for that item.
          </li>
          <li>
            Maintain <strong>three points of contact</strong> when entering and exiting the vehicle.
          </li>
          <li>
            Use <strong>wheel chocks</strong> to keep the vehicle from moving during the inspection.
          </li>
          <li>
            The exam inspects <strong>one axle</strong>, but be prepared to demonstrate the same check
            on all axles.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">High-Value Areas to Check</h2>
        <p className="mt-3 text-ink-muted">
          These are the main areas to know — not an exhaustive checklist:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {inspectionAreas.map((area) => (
            <li key={area} className="rounded-sm border border-line bg-paper px-4 py-2 text-sm text-ink">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What Can Cause an Automatic Failure</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>A <strong>dangerous action</strong> — for example, forgetting to set the parking brake.</li>
          <li>
            <strong>Failing the air brake check</strong> — if the vehicle has air brakes, you must
            perform the full air brake check correctly.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Key Federal Inspection Numbers</h2>
        <p className="mt-3 text-ink-muted">
          These are <strong>federal vehicle standards</strong>, not California DMV scoring rules:
        </p>
        <div className="mt-4 overflow-x-auto rounded-sm border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-display font-semibold">Item</th>
                <th className="px-4 py-3 font-display font-semibold">Federal standard</th>
                <th className="px-4 py-3 font-display font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {federalNumbers.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-ink">{row.item}</td>
                  <td className="px-4 py-3 font-display font-bold tabular-nums text-navy">
                    {row.standard}
                  </td>
                  <td className="px-4 py-3 text-ink-muted">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What to Say to the Examiner</h2>
        <p className="mt-3 text-ink-muted">
          The method is consistent for every item: <strong>name the part</strong>,{" "}
          <strong>point to or touch it</strong>, and <strong>explain what you&apos;re checking and
          why it matters</strong>. The examiner is looking to hear you identify each part and state
          what &ldquo;safe condition&rdquo; means for it — not recite a memorized script.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How to Practice</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
          <li>Use the same walk-around order every time.</li>
          <li>Say each step out loud as you practice.</li>
          <li>Follow the official DL-650 vehicle inspection checklist.</li>
        </ul>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-written-test", label: "California CDL Written Test" },
          { href: "/resources/cdl-study-guide", label: "California CDL Study Guide" },
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
            question: "What is the California CDL pre-trip inspection?",
            answer:
              "It's the first of three parts of the CDL skills test. You inspect the vehicle by naming, pointing to/touching, and explaining each component from memory. It's scored pass/fail.",
          },
          {
            question: "What do I need to say during the pre-trip inspection?",
            answer:
              "For each item, name the part, point to or touch it, and explain what you're checking and why it matters. The examiner is listening to hear you identify each part and describe safe condition.",
          },
          {
            question: "What happens if I fail the air brake check?",
            answer:
              "If the vehicle has air brakes, failing to perform the full air brake check correctly can cause an automatic failure of the vehicle inspection.",
          },
          {
            question: "What are the federal inspection numbers I should know?",
            answer:
              "Brake lining minimum 1/4 inch and slack adjuster pushrod maximum 1 inch (49 CFR 393.47), plus steer tire tread 4/32 inch and other tire tread 2/32 inch (49 CFR 393.75).",
          },
          {
            question: "How should I practice for the pre-trip inspection?",
            answer:
              "Use the same walk-around order every time, say each step out loud, and follow the official DL-650 vehicle inspection checklist.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
