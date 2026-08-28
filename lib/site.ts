// Central site configuration. Domain is NOT hardcoded anywhere else —
// set NEXT_PUBLIC_SITE_URL in production (see .env.example).

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "California CDL Exam Sprint Guide",
  url: SITE_URL,
  description:
    "A focused last-minute study guide for California CDL permit test preparation. Key numbers, air brakes, pre-trip inspection, and exam traps.",
  keywords: [
    "California CDL permit test",
    "California CDL study guide",
    "CDL exam guide",
    "CDL permit test preparation",
    "CDL air brake test",
    "CDL pre-trip inspection",
  ],
  ogImage: "/og-image.png",
  locale: "en_US",
};
