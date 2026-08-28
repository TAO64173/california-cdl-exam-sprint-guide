import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { faqItems } from "@/content/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the California CDL Exam Sprint Guide.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <JsonLd data={faqSchema} />
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-lg text-ink-muted">
        Everything you need to know about {site.name}.
      </p>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqItems.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-navy">
              {item.question}
              <span className="text-yellow-600 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
