import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your payment is being processed.",
  robots: { index: false, follow: false },
};

// Confirmation page only. It does NOT grant access — real authorization comes
// from the verified webhook → entitlement, not from landing here.
export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-sm bg-navy font-display text-2xl font-bold text-yellow">
          ✓
        </div>
        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Payment Successful
        </h1>
        <p className="mt-3 text-ink-muted">
          Thank you for your purchase. Your access is being prepared.
        </p>

        <div className="mt-8 rounded-sm border border-line bg-paper p-6 text-left">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
            Access Your Guide
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Enter the email you used at checkout to download your guide.
          </p>
        </div>

        <Link
          href="/access"
          className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-yellow px-7 py-3.5 font-display text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
        >
          Access Your Guide
        </Link>
        <p className="mt-4 text-xs text-ink-muted">
          If you don&apos;t see your purchase yet, give it a moment and try again.
        </p>
      </div>
    </div>
  );
}
