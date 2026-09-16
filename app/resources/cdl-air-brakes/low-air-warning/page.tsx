import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import { airBrakeFacts } from "@/content/resources/air-brakes";

export const metadata: Metadata = {
  title: "California CDL Low Air Warning PSI: 55 or 60? (Explained)",
  description:
    "California's low-air warning must activate before air pressure drops below 55 PSI. Here's why some guides say 60 PSI — and what the law actually says.",
  alternates: { canonical: "/resources/cdl-air-brakes/low-air-warning" },
};

export default function LowAirWarningPage() {
  return (
    <ResourcePage
      title="California CDL Low Air Warning PSI"
      description="California's low-air warning must activate before air pressure drops below 55 PSI."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Air Brakes", href: "/resources/cdl-air-brakes/psi" },
        { label: "Low Air Warning" },
      ]}
    >
      <QuickAnswer
        question="Is the CDL low air warning 55 or 60 PSI?"
        source="California Vehicle Code §26506 · California Commercial Driver Handbook (DL-650)"
      >
        <p>
          The low air warning must activate <strong>at or before 55 PSI</strong>. California&apos;s
          legal range is <strong>{airBrakeFacts.lowAirWarning.range}</strong>{" "}
          ({airBrakeFacts.lowAirWarning.law}), and the federal rule{" "}
          ({airBrakeFacts.lowAirWarning.federal}) also uses 55 PSI. <strong>&ldquo;60 PSI&rdquo; is a
          common simplification</strong> in study guides — not the regulation.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">The short answer: 55 PSI</h2>
        <p className="mt-3 text-ink-muted">
          The DL-650 handbook requires the low air warning (buzzer, light, or wig-wag) to activate{" "}
          <strong>before the air pressure drops below 55 PSI</strong>. If it doesn&apos;t, the
          vehicle is not safe to drive.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">California&apos;s legal range: 55–75 PSI</h2>
        <p className="mt-3 text-ink-muted">
          {airBrakeFacts.lowAirWarning.law} requires the warning device to activate at a fixed
          pressure of <strong>no more than 75 PSI and no less than 55 PSI</strong> (with the engine
          running). So the warning can activate anywhere in that range — and on large buses, it
          often activates higher (around 80–85 PSI).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Why some guides say 60 PSI</h2>
        <p className="mt-3 text-ink-muted">
          Many generic CDL study guides simplify the answer to <strong>60 PSI</strong>. That number
          isn&apos;t the regulation — it&apos;s a rough midpoint of the 55–75 PSI range, and it can
          also be confused with when spring brakes begin to apply. For the California test, remember{" "}
          <strong>55 PSI is the floor</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How it&apos;s tested</h2>
        <p className="mt-3 text-ink-muted">
          During the air brake check, you &ldquo;fan&rdquo; the brakes (rapidly press and release) to
          release air. The low air warning must come on before the pressure drops below 55 PSI. If
          it doesn&apos;t, the vehicle fails the air brake portion of the test.
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-written-test", label: "California CDL Written Test" },
          { href: "/resources/cdl-study-guide", label: "California CDL Study Guide" },
          { href: "/resources/cdl-air-brakes/psi", label: "Air Brake PSI Numbers" },
          { href: "/resources/cdl-air-brakes/cut-out-pressure", label: "Cut-Out Pressure (125 PSI)" },
          { href: "/resources/cdl-air-brakes/cut-in-pressure", label: "Cut-In Pressure (100 PSI)" },
          { href: "/resources/cdl-air-brakes/leak-rate", label: "Air Brake Leak Rate" },
        ]}
      />

      <ResourceFaq
        items={[
          {
            question: "Is the low air warning 55 or 60 PSI?",
            answer:
              "55 PSI is the floor. California's legal range is 55–75 PSI, and the federal rule also references 55 PSI. '60 PSI' is a common simplification in study guides.",
          },
          {
            question: "What happens if the low air warning comes on while driving?",
            answer:
              "Stop safely and park as soon as possible. The vehicle should be repaired before continuing.",
          },
          {
            question: "How is the low air warning tested?",
            answer:
              "By fanning the brakes with the key on and engine off (or on). The warning must activate before pressure drops below 55 PSI.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
