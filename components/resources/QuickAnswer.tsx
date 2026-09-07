import type { ReactNode } from "react";

// Featured-snippet-style block: the direct answer first, then a short
// explanation and a source. Placed at the top of every SEO resource page.
export default function QuickAnswer({
  question,
  children,
  source,
}: {
  question: string;
  children: ReactNode;
  source?: string;
}) {
  return (
    <div className="rounded-sm border border-yellow bg-paper p-6">
      <p className="font-display text-xs font-bold uppercase tracking-wide text-navy-700">
        {question}
      </p>
      <div className="mt-3 text-base leading-relaxed text-ink">{children}</div>
      {source ? (
        <p className="mt-4 border-t border-line pt-3 text-xs text-ink-muted">
          Source: {source}
        </p>
      ) : null}
    </div>
  );
}
