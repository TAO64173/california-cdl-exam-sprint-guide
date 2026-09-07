import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumb, { type Crumb } from "@/components/resources/Breadcrumb";
import { airBrakeSource } from "@/content/resources/air-brakes";
import { site } from "@/lib/site";

// Shared wrapper for SEO resource pages: Article structured data, breadcrumb,
// H1, last-updated, and a standard source/disclaimer note.
export default function ResourcePage({
  title,
  description,
  crumbs,
  children,
}: {
  title: string;
  description: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd data={articleSchema} />
      <Breadcrumb items={crumbs} />
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Last updated: {airBrakeSource.lastUpdated}
      </p>
      <div className="mt-8 space-y-8">{children}</div>
      <p className="mt-8 rounded-sm border border-line bg-paper p-4 text-xs leading-relaxed text-ink-muted">
        {airBrakeSource.note}
      </p>
    </div>
  );
}
