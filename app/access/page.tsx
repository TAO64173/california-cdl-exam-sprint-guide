import type { Metadata } from "next";
import AccessForm from "@/components/product/AccessForm";

export const metadata: Metadata = {
  title: "Access Your Guide",
  description: "Enter your purchase email to download the California CDL Exam Sprint Guide.",
  robots: { index: false, follow: false },
};

export default function AccessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
          Digital Access
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Access Your Guide
        </h1>
        <p className="mt-3 text-ink-muted">
          Enter the email you used at checkout to download your guide.
        </p>
        <div className="mt-8">
          <AccessForm />
        </div>
      </div>
    </div>
  );
}
