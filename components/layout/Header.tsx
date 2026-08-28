"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { product } from "@/content/product";

const nav = [
  { label: "What's Inside", href: "/#inside" },
  { label: "Preview", href: "/preview" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy font-display text-xs font-extrabold text-yellow">
            CA
          </span>
          <span className="font-display text-sm font-extrabold leading-tight text-navy sm:text-[15px]">
            California CDL
            <span className="text-navy-700"> Exam Sprint Guide</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#pricing">{product.cta.primary}</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-4">
              <Button href="/#pricing" className="w-full" size="lg">
                {product.cta.primary}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
