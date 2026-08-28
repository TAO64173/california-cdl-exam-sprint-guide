import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/faq";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading kicker="FAQ" heading="Questions, Answered" align="center" />
        <div className="mt-12 divide-y divide-line border-y border-line">
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
    </section>
  );
}
