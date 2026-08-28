import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Small-radius surface with a subtle border — "manual" feel, not SaaS rounded.
type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-sm border border-line bg-white", className)}>{children}</div>
  );
}
