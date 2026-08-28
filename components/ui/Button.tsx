import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outlineLight" | "outlineDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-sm font-display font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-yellow text-navy hover:bg-yellow-600",
  secondary: "bg-navy text-white hover:bg-navy-800",
  outlineLight: "border-2 border-white/40 text-white hover:border-yellow hover:text-yellow",
  outlineDark: "border-2 border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </a>
  );
}
