import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">{children}</div>
    </div>
  );
}
