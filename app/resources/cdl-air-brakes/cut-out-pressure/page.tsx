import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import { airBrakeFacts } from "@/content/resources/air-brakes";

export const metadata: Metadata = {
  title: "CDL Air Brake Cut-Out Pressure (125 PSI Explained)",
  description:
    "Air brake governor cut-out pressure is about 125 PSI. What it means, why it matters, and how it's tested on the CDL exam.",
  alternates: { canonical: "/resources/cdl-air-brakes/cut-out-pressure" },
};

export default function CutOutPage() {
  return (
    <ResourcePage
      title="CDL Air Brake Cut-Out Pressure"
      description="Air brake governor cut-out pressure is about 125 PSI."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Air Brakes", href: "/resources/cdl-air-brakes/psi" },
        { label: "Cut-Out Pressure" },
      ]}
    >
      <QuickAnswer question="What is the air brake cut-out pressure?" source="California Commercial Driver Handbook (DL-650)">
        <p>
          The governor cut-out pressure is <strong>{airBrakeFacts.cutOut.value}</strong> —{" "}
          {airBrakeFacts.cutOut.range}. This is the pressure at which the air compressor{" "}
          <strong>stops pumping air</strong> into the tanks.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What &ldquo;cut-out&rdquo; means</h2>
        <p className="mt-3 text-ink-muted">
          &ldquo;Cut-out&rdquo; is the point where the governor tells the air compressor to stop
          filling the system because it&apos;s fully charged. On the CDL test, the standard answer
          is <strong>about 125 PSI</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">The typical range</h2>
        <p className="mt-3 text-ink-muted">
          The exact number is <strong>manufacturer-specified</strong>, so it&apos;s normal to see a
          range of {airBrakeFacts.cutOut.range}. For the written test, memorize{" "}
          <strong>125 PSI</strong> — not an exact legal fixed value.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How it&apos;s tested</h2>
        <p className="mt-3 text-ink-muted">
          During the air brake check, you watch the gauge build to cut-out pressure. The
          compressor should stop around 125 PSI, confirming the governor is working.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Cut-out vs cut-in</h2>
        <p className="mt-3 text-ink-muted">
          Cut-out (about 125 PSI) is when the compressor <em>stops</em>. Cut-in (about 100 PSI) is
          when it <em>starts again</em>. Don&apos;t mix the two — see the{" "}
          <a href="/resources/cdl-air-brakes/cut-in-pressure" className="text-navy underline underline-offset-2">
            cut-in page
          </a>.
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-air-brakes/psi", label: "Air Brake PSI Numbers" },
          { href: "/resources/cdl-air-brakes/cut-in-pressure", label: "Cut-In Pressure (100 PSI)" },
          { href: "/resources/cdl-air-brakes/low-air-warning", label: "Low Air Warning (55 PSI)" },
          { href: "/resources/cdl-air-brakes/leak-rate", label: "Air Brake Leak Rate" },
        ]}
      />

      <ResourceFaq
        items={[
          {
            question: "What PSI does the air brake governor cut out?",
            answer:
              "About 125 PSI — the compressor stops pumping air once the tanks are fully charged. The manufacturer-specified range is typically 120–140 PSI.",
          },
          {
            question: "Is cut-out exactly 125 PSI?",
            answer:
              "No. 125 PSI is the standard test answer, but the actual value is manufacturer-specified (typically 120–140 PSI).",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
