// Product source of truth. The PDF is the authoritative content; this file
// mirrors it so the website never drifts from the product. Update in one place.

import { productCommerce, productPriceLabel } from "@/lib/products";

export const product = {
  name: productCommerce.name,
  edition: "California CDL Edition",
  tagline: "Numbers • Air Brakes • Pre-Trip • Exam Traps",
  shortDescription:
    "A focused last-minute study guide for California CDL permit test preparation.",
  longDescription:
    "A high-yield, numbers-first exam preparation workbook built for California Commercial Driver License (Class A, B, C) written test candidates.",

  price: productCommerce.priceCents / 100,
  priceLabel: productPriceLabel,
  currency: productCommerce.currency,
  billingNote: "One-time purchase. No subscription.",
  pageCount: 12,
  format: "PDF",
  cta: { primary: "GET THE GUIDE", secondary: "SEE WHAT'S INSIDE" },

  included: [
    "Complete 12-page PDF guide",
    "Instant digital access after purchase",
    "Printable PDF",
    "Access to your purchased version",
  ],

  sourceNote:
    "Aligned with the California Commercial Driver Handbook (DL-650, Rev. 8/2023).",

  disclaimer:
    "California CDL Exam Sprint Guide is an independent study resource and is not affiliated with, endorsed by, or sponsored by the California Department of Motor Vehicles.",
} as const;

// Key numeric standards — locked to the 12-page guide (Section 01 / Air Brakes).
export const keyNumbers = [
  { value: "125 PSI", label: "Governor Cut-Out", note: "Compressor stops filling the tanks." },
  { value: "100 PSI", label: "Governor Cut-In", note: "Compressor starts pumping again." },
  { value: "55 PSI", label: "Low Pressure Warning", note: "Buzzer / light must activate below this." },
  { value: "20–45 PSI", label: "Spring Brakes", note: "Brakes pop out and lock automatically." },
  { value: "4/32″", label: "Steer Tire Tread", note: "Front axle minimum — double the rear." },
  { value: "2/32″", label: "Other Tire Tread", note: "Drive & trailer axle minimum." },
  { value: "0.04%", label: "CDL BAC Limit", note: "Half the regular-driver 0.08% limit." },
  { value: "1 sec / 10 ft", label: "Following Distance", note: "Add 1 second over 40 mph." },
  { value: "10 / 100 / 200 ft", label: "Warning Triangles", note: "Divided / one-way highway placement." },
  { value: "15–50 ft", label: "Railroad Crossing", note: "Required vehicles stop in this zone." },
  { value: "1 / 10 ft", label: "Cargo Tie-Downs", note: "Minimum 2 tie-downs on any cargo." },
  { value: "3 / 4 / 6", label: "Applied Air Leak Rate", note: "Single / combination / triple — PSI/min." },
] as const;

// Air brake pressure gradient + leak rates (Section: Air Brake System).
export const airBrake = {
  gradient: [
    { value: "125", label: "Cut-Out", detail: "Compressor fills" },
    { value: "100", label: "Cut-In", detail: "Governor refills" },
    { value: "55", label: "Low Warning", detail: "Alarm activates" },
    { value: "20–45", label: "Springs Lock", detail: "Parking brakes pop out" },
  ],
  leakTest: {
    applied: [
      { value: "3 PSI/min", unit: "Single Vehicle" },
      { value: "4 PSI/min", unit: "Combination" },
      { value: "6 PSI/min", unit: "Triple Combination" },
    ],
    static: [
      { value: "2 PSI/min", unit: "Single Vehicle" },
      { value: "3 PSI/min", unit: "Combination" },
      { value: "5 PSI/min", unit: "Triple Combination" },
    ],
    memoryRule: "125 Fills → 100 Refills → 55 Warns → 20-45 Locks.",
  },
} as const;

// What's Inside — mirrors the actual sections of the 12-page guide.
export const guideSections = [
  {
    title: "Air Brakes",
    description:
      "Cut-in, cut-out, low-warning pressure and the 3-4-6 leak test sequence on a single page.",
  },
  {
    title: "Pre-Trip Inspection",
    description:
      "High-frequency walk-around failure points and the official “Point. Touch. Explain.” method.",
  },
  {
    title: "Key Numbers",
    description:
      "Every critical PSI, inch, foot, and percentage value in one place.",
  },
  {
    title: "Exam Traps",
    description:
      "10 common DMV wording traps with the wrong and correct answers side by side.",
  },
  {
    title: "Quick Review",
    description:
      "Practice question cards and a last-24-hours countdown for the final sprint.",
  },
] as const;
