import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "yellow" | "navy" | "outline";

const variants: Record<Variant, string> = {
  yellow: "bg-yellow text-navy",
  navy: "bg-navy text-white",
  outline: "border border-navy/30 text-navy",
};

type BadgeProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export default function Badge({ variant = "yellow", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.15em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
