import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="2026-08-20">
      {/* TODO: FINALIZE REFUND POLICY — do not invent specific terms until confirmed. */}
      <p>
        Our refund policy for this digital product is being finalized and will be posted
        here before orders are accepted.
      </p>
      <p>
        Digital products are delivered electronically. If you have a problem with your
        purchase or access, please contact us and we will do our best to help.
      </p>
    </LegalPage>
  );
}
