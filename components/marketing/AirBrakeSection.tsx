import SectionHeading from "@/components/ui/SectionHeading";
import { airBrake } from "@/content/product";

export default function AirBrakeSection() {
  return (
    <section id="air-brakes" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Air Brakes"
          heading="Air Brake Numbers, Simplified"
          lead="The air brake section fails more candidates than any other. Two sets of numbers to lock in: the pressure gradient and the leak rates."
          tone="light"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-yellow">
              Pressure Gradient
            </h3>
            <ol className="mt-5 space-y-3">
              {airBrake.gradient.map((g, i) => (
                <li key={g.label} className="flex items-center gap-4 border-b border-white/10 pb-3">
                  <span className="font-display text-xs font-bold text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-24 font-display text-2xl font-extrabold tabular-nums text-yellow">
                    {g.value}
                  </span>
                  <span className="font-display text-base font-semibold">{g.label}</span>
                  <span className="ml-auto hidden text-sm text-white/50 sm:block">{g.detail}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-sm border border-yellow/30 bg-navy-800 p-4 text-sm text-white/80">
              <span className="font-semibold text-yellow">Memory rule:</span> {airBrake.leakTest.memoryRule}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-yellow">
              Air Leak Rates (PSI/min)
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-white/10 bg-navy-800 p-5">
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                  Applied Test
                </p>
                <ul className="mt-4 space-y-3">
                  {airBrake.leakTest.applied.map((a) => (
                    <li key={a.unit} className="flex items-baseline justify-between gap-2">
                      <span className="text-sm text-white/70">{a.unit}</span>
                      <span className="font-display text-xl font-extrabold tabular-nums text-yellow">
                        {a.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-white/10 bg-navy-800 p-5">
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                  Static Test
                </p>
                <ul className="mt-4 space-y-3">
                  {airBrake.leakTest.static.map((a) => (
                    <li key={a.unit} className="flex items-baseline justify-between gap-2">
                      <span className="text-sm text-white/70">{a.unit}</span>
                      <span className="font-display text-xl font-extrabold tabular-nums text-yellow">
                        {a.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
