"use client";

import type { ReactNode } from "react";
import { track, type CtaName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

type CtaButtonProps = {
  href: string;
  cta: CtaName;
  children: ReactNode;
  size?: keyof typeof SIZES;
  className?: string;
};

// Client CTA that fires a `cta_click` GA4 event. Same primary (yellow) styling
// as Button, but as a minimal client wrapper so the marketing sections stay
// server components.
export default function CtaButton({
  href,
  cta,
  children,
  size = "md",
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={() => track({ name: "cta_click", cta })}
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-yellow font-display font-bold uppercase tracking-wide text-navy transition-colors duration-150 hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2",
        SIZES[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
