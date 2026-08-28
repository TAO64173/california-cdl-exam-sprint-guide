import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="2026-08-20">
      <h2 className="font-display text-lg font-bold text-navy">Acceptance of terms</h2>
      <p>
        By accessing this website or purchasing the California CDL Exam Sprint Guide, you
        agree to these Terms of Use.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">License</h2>
      <p>
        Your purchase grants you a personal, non-exclusive, non-transferable license to
        use the guide for your own study. You may not redistribute, resell, or republish
        the guide or its contents.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Intellectual property</h2>
      <p>
        The guide and this website, including text, design, and layout, are the property
        of their respective owners and are protected by applicable law.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Accuracy disclaimer</h2>
      <p>
        The guide is an independent study resource. It is not affiliated with, endorsed
        by, or sponsored by the California Department of Motor Vehicles. While the content
        is prepared against publicly available California CDL materials, laws and test
        procedures may change, and you should verify current requirements with official
        sources.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">No guarantee</h2>
      <p>
        The guide does not guarantee a passing score or any particular test result.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, the site and its operators are not liable
        for any indirect, incidental, or consequential damages arising from use of the
        guide or this website.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">Contact</h2>
      <p>Questions about these terms can be directed to the Contact page.</p>
    </LegalPage>
  );
}
