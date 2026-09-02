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
        Email:{" "}
        <a
          href="mailto:taoq8397@gmail.com"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy-700"
        >
          taoq8397@gmail.com
        </a>
      </p>
    </LegalPage>
  );
}
