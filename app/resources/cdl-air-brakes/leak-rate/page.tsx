import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import ResourceFaq from "@/components/resources/ResourceFaq";
import { airBrakeFacts } from "@/content/resources/air-brakes";

export const metadata: Metadata = {
  title: "CDL Air Brake Leak Rate: Static vs Applied Limits",
  description:
    "Static and applied air brake leak rate limits — single, combination, and California triple — without the confusion.",
  alternates: { canonical: "/resources/cdl-air-brakes/leak-rate" },
};

function LeakTable({ rows }: { rows: readonly { vehicle: string; value: string }[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-sm border border-line">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-line bg-white">
          {rows.map((row) => (
            <tr key={row.vehicle}>
              <td className="px-4 py-3 font-medium text-ink">{row.vehicle}</td>
              <td className="px-4 py-3 text-right font-display font-bold tabular-nums text-navy">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LeakRatePage() {
  return (
    <ResourcePage
      title="CDL Air Brake Leak Rate"
      description="Static and applied air brake leak rate limits for the California CDL test."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Air Brakes", href: "/resources/cdl-air-brakes/psi" },
        { label: "Leak Rate" },
      ]}
    >
      <QuickAnswer question="What is the CDL air brake leak rate?" source="California Commercial Driver Handbook (DL-650)">
        <p>
          Static (foot off brake): <strong>single 2, combination 3 PSI/min</strong>. Applied (foot
          on brake): <strong>single 3, combination 4 PSI/min</strong>. California also lists{" "}
          <strong>triple combination at 5 static / 6 applied</strong>.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Static leak test</h2>
        <p className="mt-3 text-ink-muted">
          With the engine off, parking brakes released, and foot <strong>off</strong> the brake
          pedal:
        </p>
        <LeakTable rows={airBrakeFacts.leakRate.static} />
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Applied leak test</h2>
        <p className="mt-3 text-ink-muted">
          With the engine off and foot <strong>holding</strong> the brake pedal:
        </p>
        <LeakTable rows={airBrakeFacts.leakRate.applied} />
        <p className="mt-3 text-xs text-ink-muted">
          Triple-combination leak rates are California DL-650 content — most other states only test
          single and combination vehicles.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Static vs applied — what&apos;s the difference?</h2>
        <p className="mt-3 text-ink-muted">
          <strong>Static</strong> measures leaks with the brakes released. <strong>Applied</strong>{" "}
          measures leaks with the brakes held. Applied allows 1 PSI/min more because the brake
          chambers and lines are pressurized.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">How the test is performed</h2>
        <p className="mt-3 text-ink-muted">
          Charge the system to full pressure, turn the engine off, release the parking brake, and
          let the gauge settle. Time one minute and watch the pressure drop. If the loss exceeds the
          limit, the vehicle has a leak that must be fixed.
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-air-brakes/psi", label: "Air Brake PSI Numbers" },
          { href: "/resources/cdl-air-brakes/cut-out-pressure", label: "Cut-Out Pressure (125 PSI)" },
          { href: "/resources/cdl-air-brakes/cut-in-pressure", label: "Cut-In Pressure (100 PSI)" },
          { href: "/resources/cdl-air-brakes/low-air-warning", label: "Low Air Warning (55 PSI)" },
        ]}
      />

      <ResourceFaq
        items={[
          {
            question: "What is the static leak rate for a combination vehicle?",
            answer:
              "3 PSI per minute. A single vehicle allows 2 PSI/min static.",
          },
          {
            question: "What is the applied leak rate for a single vehicle?",
            answer:
              "3 PSI per minute. A combination vehicle allows 4 PSI/min applied.",
          },
          {
            question: "What's the difference between static and applied?",
            answer:
              "Static is measured with the brakes released; applied is measured with the brakes held. Applied allows 1 PSI/min more.",
          },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
