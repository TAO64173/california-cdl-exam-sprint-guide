import JsonLd from "@/components/seo/JsonLd";

export type FaqItem = { question: string; answer: string };

// FAQ section with real, search-intent-driven questions only. Emits FAQPage
// structured data when items are present.
export default function ResourceFaq({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="mt-12">
      <JsonLd data={schema} />
      <h2 className="font-display text-xl font-bold text-navy">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
              {item.question}
              <span className="text-yellow-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
