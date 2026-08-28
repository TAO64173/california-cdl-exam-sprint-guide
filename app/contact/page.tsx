import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact" updated="2026-08-20">
      <p>
        Have a question about the California CDL Exam Sprint Guide, your order, or your
        access code? Reach out and we&apos;ll get back to you.
      </p>

      <p>
        {/* TODO: replace with a real support email before going live. */}
        Email:{" "}
        <a
          href="mailto:support@example.com"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy-700"
        >
          support@example.com
        </a>
      </p>

      <p>
        Please note: this is a placeholder contact address for the website build. A
        production support channel will be configured before launch.
      </p>
    </LegalPage>
  );
}
