import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="2026-08-20">
      <p>
        This Privacy Policy explains what information the California CDL Exam Sprint
        Guide website collects and how it is used.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Information we collect</h2>
      <p>
        <strong>Usage data.</strong> We may use privacy-respecting analytics to understand
        site traffic, such as page views and button clicks. This does not identify you by
        name unless you choose to provide it.
      </p>
      <p>
        <strong>Contact information.</strong> If you email us or submit a contact form, we
        receive whatever information you choose to send.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">How we use information</h2>
      <p>
        We use information to operate and improve the site, respond to inquiries, and
        fulfill orders you place.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Third-party services</h2>
      <p>
        When you purchase or visit, a payment processor and Google Analytics may
        process data on our behalf. Each service is governed by its own privacy policy.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Cookies</h2>
      <p>
        The site may use essential cookies and analytics cookies to function and to
        understand how visitors use it.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Your rights</h2>
      <p>
        You may request access to or deletion of your personal information by contacting
        us. See the Contact page.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Changes</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on this page.
      </p>
    </LegalPage>
  );
}
