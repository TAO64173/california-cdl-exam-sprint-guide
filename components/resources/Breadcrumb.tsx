import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-6 text-sm text-ink-muted" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center">
            {i > 0 ? (
              <span aria-hidden="true" className="mx-2 text-ink-muted/60">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
