// Air Brake SEO facts — LOCKED.
// Source of truth: SEO_AIR_BRAKE_FACT_LOCK_V1.md. Do NOT change numbers here
// without re-running the fact lock against the current DL-650 / FMCSA / Veh Code.

export const airBrakeFacts = {
  cutOut: {
    value: "about 125 PSI",
    range: "typically 120–140 PSI (manufacturer-specified)",
  },
  cutIn: {
    value: "about 100 PSI",
  },
  lowAirWarning: {
    floor: "55 PSI",
    range: "55–75 PSI",
    law: "California Vehicle Code §26506",
    federal: "49 CFR §393.51",
  },
  springBrake: {
    value: "about 20–45 PSI",
  },
  leakRate: {
    static: [
      { vehicle: "Single vehicle", value: "2 PSI/min" },
      { vehicle: "Combination vehicle", value: "3 PSI/min" },
      { vehicle: "Triple combination (California)", value: "5 PSI/min" },
    ],
    applied: [
      { vehicle: "Single vehicle", value: "3 PSI/min" },
      { vehicle: "Combination vehicle", value: "4 PSI/min" },
      { vehicle: "Triple combination (California)", value: "6 PSI/min" },
    ],
  },
} as const;

export const airBrakeSource = {
  handbook: "California Commercial Driver Handbook (DL-650)",
  note: "This page is an independent study resource. It is not affiliated with the California DMV. Verify current requirements against official sources.",
  lastUpdated: "September 2026",
} as const;
