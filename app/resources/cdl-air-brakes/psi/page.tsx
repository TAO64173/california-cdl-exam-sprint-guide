import type { Metadata } from "next";
import ResourcePage from "@/components/resources/ResourcePage";
import QuickAnswer from "@/components/resources/QuickAnswer";
import ProductCta from "@/components/resources/ProductCta";
import RelatedLinks from "@/components/resources/RelatedLinks";
import { airBrakeFacts } from "@/content/resources/air-brakes";

export const metadata: Metadata = {
  title: "CDL Air Brake PSI Numbers: The Complete Cheat Sheet (California)",
  description:
    "All the air brake PSI numbers for the California CDL test — cut-out, cut-in, low-air warning, spring brakes, and leak rates in one table.",
  alternates: { canonical: "/resources/cdl-air-brakes/psi" },
};

const pressureRows = [
  { label: "Governor cut-out", value: airBrakeFacts.cutOut.value, note: airBrakeFacts.cutOut.range },
  { label: "Governor cut-in", value: airBrakeFacts.cutIn.value, note: "Compressor starts pumping again" },
  { label: "Low-air warning", value: airBrakeFacts.lowAirWarning.floor, note: `Legal range ${airBrakeFacts.lowAirWarning.range}` },
  { label: "Spring brakes", value: airBrakeFacts.springBrake.value, note: "Parking/emergency brakes pop out" },
];

export default function PsiPage() {
  return (
    <ResourcePage
      title="CDL Air Brake PSI Numbers"
      description="All the air brake PSI numbers for the California CDL test, in one table."
      crumbs={[{ label: "Home", href: "/" }, { label: "Air Brake PSI Numbers" }]}
    >
      <QuickAnswer question="What are the air brake PSI numbers for the CDL test?" source="California Commercial Driver Handbook (DL-650)">
        <p>
          The four pressure numbers to memorize are: <strong>cut-out about 125 PSI</strong>,{" "}
          <strong>cut-in about 100 PSI</strong>, <strong>low-air warning at 55 PSI</strong>, and{" "}
          <strong>spring brakes at about 20–45 PSI</strong>. Leak rates are a separate set of numbers.
        </p>
      </QuickAnswer>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">The 4 Pressure Numbers</h2>
        <div className="mt-4 overflow-x-auto rounded-sm border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-display font-semibold">Check</th>
                <th className="px-4 py-3 font-display font-semibold">PSI</th>
                <th className="px-4 py-3 font-display font-semibold">What it means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {pressureRows.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 font-medium text-ink">{row.label}</td>
                  <td className="px-4 py-3 font-display font-bold tabular-nums text-navy">{row.value}</td>
                  <td className="px-4 py-3 text-ink-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">Air Brake Leak Rates</h2>
        <p className="mt-3 text-ink-muted">
          Leak rates are tested with the engine off, in PSI per minute:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-line bg-paper p-4">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-navy-700">Static (foot off brake)</p>
            <ul className="mt-2 space-y-1 text-sm text-ink">
              {airBrakeFacts.leakRate.static.map((r) => (
                <li key={r.vehicle} className="flex justify-between">
                  <span>{r.vehicle}</span>
                  <span className="font-semibold tabular-nums">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-line bg-paper p-4">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-navy-700">Applied (foot on brake)</p>
            <ul className="mt-2 space-y-1 text-sm text-ink">
              {airBrakeFacts.leakRate.applied.map((r) => (
                <li key={r.vehicle} className="flex justify-between">
                  <span>{r.vehicle}</span>
                  <span className="font-semibold tabular-nums">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          Triple-combination leak rates are California DL-650 content — most other states only test single and combination.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-navy">What Each Number Means</h2>
        <div className="mt-4 space-y-4 text-ink-muted">
          <p>
            <strong className="text-navy">Cut-out (about 125 PSI):</strong> the air compressor stops
            filling the tanks when the system is fully charged.{" "}
            <a href="/resources/cdl-air-brakes/cut-out-pressure" className="text-navy underline underline-offset-2">Read the full explanation →</a>
          </p>
          <p>
            <strong className="text-navy">Cut-in (about 100 PSI):</strong> the compressor starts pumping
            again as pressure drops.{" "}
            <a href="/resources/cdl-air-brakes/cut-in-pressure" className="text-navy underline underline-offset-2">Read the full explanation →</a>
          </p>
          <p>
            <strong className="text-navy">Low-air warning (55 PSI):</strong> the buzzer/light must
            activate before pressure falls below 55 PSI.{" "}
            <a href="/resources/cdl-air-brakes/low-air-warning" className="text-navy underline underline-offset-2">Read why some guides say 60 →</a>
          </p>
          <p>
            <strong className="text-navy">Spring brakes (about 20–45 PSI):</strong> the parking/emergency
            brakes pop out and lock automatically.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/resources/cdl-written-test", label: "California CDL Written Test" },
          { href: "/resources/cdl-study-guide", label: "California CDL Study Guide" },
          { href: "/resources/cdl-air-brakes/cut-out-pressure", label: "Cut-Out Pressure (125 PSI)" },
          { href: "/resources/cdl-air-brakes/cut-in-pressure", label: "Cut-In Pressure (100 PSI)" },
          { href: "/resources/cdl-air-brakes/low-air-warning", label: "Low Air Warning (55 PSI)" },
          { href: "/resources/cdl-air-brakes/leak-rate", label: "Air Brake Leak Rate" },
        ]}
      />

      <ProductCta />
    </ResourcePage>
  );
}
