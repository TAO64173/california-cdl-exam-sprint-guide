// FAQ content. Answers are factual and do not overpromise (no guarantees,
// no fake social proof). Matches the product's actual capabilities.

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Is this an official California DMV product?",
    answer:
      "No. This is an independent study guide created for California CDL permit test preparation. It is not affiliated with, endorsed by, or sponsored by the California DMV.",
  },
  {
    question: "Is this a replacement for the California CDL handbook?",
    answer:
      "No. It is designed as a focused review and memory aid, not a replacement for the official California Commercial Driver Handbook (DL-650).",
  },
  {
    question: "Is this a physical book?",
    answer: "No. It is a digital PDF product delivered electronically.",
  },
  {
    question: "When will I receive it?",
    answer:
      "Digital access is provided after successful payment. Once your order is confirmed, you can unlock and download the guide.",
  },
  {
    question: "Can I print it?",
    answer: "Yes, if the purchased PDF version supports printing.",
  },
  {
    question: "Is this only for California?",
    answer:
      "Yes. The guide is specifically designed around California CDL test preparation and the California Commercial Driver Handbook (DL-650).",
  },
  {
    question: "Does it guarantee that I will pass?",
    answer:
      "No. No study guide can guarantee a test result. This guide focuses on the numbers, rules, and exam traps that are easy to forget.",
  },
] as const;
