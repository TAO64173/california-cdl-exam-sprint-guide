import Link from "next/link";

export default function RelatedLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl font-bold text-navy">Related Resources</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-2 rounded-sm border border-line bg-paper px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-navy"
            >
              {link.label}
              <span aria-hidden="true" className="text-ink-muted">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
