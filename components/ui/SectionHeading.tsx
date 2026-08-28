import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  heading: string;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

// Consistent section header: numbered kicker + Montserrat heading + optional lead.
export default function SectionHeading({
  kicker,
  heading,
  lead,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter && "text-center", className)}>
      {kicker ? (
        <p
          className={cn(
            "mb-3 font-display text-xs font-bold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-yellow-600" : "text-yellow",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl",
          tone === "dark" ? "text-navy" : "text-white",
        )}
      >
        {heading}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            tone === "dark" ? "text-ink-muted" : "text-white/70",
            isCenter && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
