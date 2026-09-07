import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import { airBrakeFacts } from "@/content/resources/air-brakes";

export const metadata: Metadata = {
  title: "CDL Air Brake Cut-In Pressure (100 PSI Explained)",
  description:
    "Air brake governor cut-in pressure is about 100 PSI. Here's what it controls and why it's on the CDL test.",
  alternates: { canonical: "/resources/cdl-air-brakes/cut-in-pressure" },
};

export default function CutInPage() {
  return (
    <ResourcePage
      title="CDL Air Brake Cut-In Pressure"
      description="Air brake governor cut-in pressure is about 100 PSI."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Air Brakes", href: "/resources/cdl-air-brakes/psi" },
        { label: "Cut-In Pressure" },
      ]}
    >
      <QuickAnswer question="What is the air brake cut-in pressure?" source="California Commercial Driver Handbook (DL-650)">
        <p>
          The governor cut-in pressure is <strong>{airBrakeFacts.cutIn.value}</strong>. This is the
          pressure at which the air compressor <strong>starts pumping again</strong> after the
          system has been used.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What &ldquo;cut-in&rdquo; means</h2>
        <p className="mt-3 text-ink-muted">
          &ldquo;Cut-in&rdquo; is the point where the governor turns the compressor back on to
          refill the tanks. On the CDL test, the standard answer is <strong>about 100 PSI</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Cut-in vs cut-out</h2>
        <p className="mt-3 text-ink-muted">
          Cut-in (about 100 PSI) is when the compressor <em>starts</em>. Cut-out (about 125 PSI) is
          when it <em>stops</em>. Together they keep the system in its normal operating range of
          roughly 100–125 PSI.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">A common mix-up</h2>
        <p className="mt-3 text-ink-muted">
          The &ldquo;85 to 100 PSI within 45 seconds&rdquo; figure is a <strong>buildup-rate test</strong>,
          not the cut-in pressure. Don&apos;t confuse the two.
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-air-brakes/psi", label: "Air Brake PSI Numbers" },
          { href: "/resources/cdl-air-brakes/cut-out-pressure", label: "Cut-Out Pressure (125 PSI)" },
          { href: "/resources/cdl-air-brakes/low-air-warning", label: "Low Air Warning (55 PSI)" },
          { href: "/resources/cdl-air-brakes/leak-rate", label: "Air Brake Leak Rate" },
        ]}
      />

      <ResourceFaq
        items={[
          {
            question: "What PSI does the air brake governor cut in?",
            answer:
              "About 100 PSI. The compressor starts pumping again once pressure drops to this level.",
          },
          {
            question: "Is 85 PSI the cut-in pressure?",
            answer:
              "No. 85 PSI relates to the air-pressure buildup test (85 to 100 PSI within 45 seconds), not the governor cut-in pressure.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
