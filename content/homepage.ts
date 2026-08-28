// Homepage marketing copy. All claims are factual; no fabricated statistics,
// testimonials, discounts, or scarcity. Product facts come from content/product.

export const hero = {
  badge: "CALIFORNIA CDL EDITION",
  supporting:
    "A focused last-minute study guide for California CDL permit test preparation.",
  primaryCta: "GET THE GUIDE",
  secondaryCta: "SEE WHAT'S INSIDE",
  coverCaption: "12-page PDF · Instant digital download",
} as const;

export const problem = {
  kicker: "The Problem",
  heading: "Stop Studying Everything. Focus on What Matters.",
  lead: "Most CDL candidates aren't short on material — they're buried in it.",
  body: [
    "The official handbook, practice questions, YouTube videos, and random cheat sheets each point in a different direction. By test day, the numbers and rules that actually decide a pass are scattered everywhere.",
    "This guide is a focused review tool, not a replacement for the official handbook. It pulls the exact figures you're most likely to forget into one short, high-density reference.",
  ],
} as const;

export const trust = {
  kicker: "Accuracy",
  heading: "Built From Official California CDL Materials",
  body: "The content was prepared against and checked against the California Commercial Driver Handbook (DL-650).",
  note: "This is an independent study guide based on publicly available California CDL materials. It is not a DMV product and is not DMV approved.",
} as const;

export const isIsNot = {
  kicker: "Clear Expectations",
  heading: "What This Is — And What It Isn't",
  is: {
    title: "This Guide Is",
    items: [
      "A focused review tool",
      "A quick-reference guide",
      "A memory aid for key numbers",
      "A last-minute study companion",
    ],
  },
  isNot: {
    title: "This Guide Is Not",
    items: [
      "The official California DMV handbook",
      "A replacement for official study materials",
      "A guaranteed-pass product",
      "Professional legal advice",
    ],
  },
} as const;

export const audience = {
  kicker: "Who It's For",
  heading: "Built For Last-Minute Review",
  goodFit: [
    "Taking the California CDL permit test",
    "Reviewing before test day",
    "Refreshing key numbers and PSI values",
    "Reviewing air brake rules",
    "Avoiding common exam traps",
  ],
  notFor:
    "Someone looking for a complete replacement for the California Commercial Driver Handbook.",
} as const;

export const howItWorks = {
  kicker: "How It Works",
  heading: "Three Simple Steps",
  steps: [
    { number: "01", title: "Purchase", description: "Complete a one-time purchase of the guide." },
    { number: "02", title: "Get Access", description: "Receive access to your digital copy." },
    { number: "03", title: "Study", description: "Open the guide and start your final review." },
  ],
} as const;

export const pricing = {
  kicker: "Pricing",
  heading: "California CDL Exam Sprint Guide",
  note: "One-time purchase. No subscription.",
} as const;

export const finalCta = {
  heading: "Ready for a Faster Final Review?",
  supporting: "Review the numbers. Review the rules. Walk into test day prepared.",
  cta: "GET THE GUIDE",
} as const;
