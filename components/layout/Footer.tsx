import Link from "next/link";
import { product } from "@/content/product";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Preview", href: "/preview" },
  { label: "FAQ", href: "/faq" },
  { label: "Access Your Guide", href: "/access" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-base font-extrabold text-white">{product.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Independent study resource for California CDL test preparation.
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-yellow">
              Product
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-yellow">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed">
          <p>Not affiliated with or endorsed by the California DMV.</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {product.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
