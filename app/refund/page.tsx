import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="September 2, 2026">
      <p>Thank you for purchasing the California CDL Exam Sprint Guide.</p>

      <p>
        This is a digital PDF product delivered electronically after purchase. Because
        digital products can be accessed immediately, purchases are generally
        non-refundable once the product has been successfully delivered or accessed,
        except where a refund is required by applicable law or as otherwise stated below.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">
        1. General Refund Policy
      </h2>
      <p>We generally do not offer refunds for:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Change of mind after purchase</li>
        <li>
          Accidental purchase when the product has already been delivered or accessed
        </li>
        <li>Failure to use the product</li>
        <li>Failure to achieve a desired test score or pass a CDL permit test</li>
        <li>
          Personal preference regarding the format, length, or study approach of the guide
        </li>
      </ul>
      <p>
        The California CDL Exam Sprint Guide is a study and review resource. Purchasing
        the guide does not guarantee a particular test score, passing result, CDL permit,
        or license.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">
        2. Technical and Delivery Issues
      </h2>
      <p>If you paid for the product but:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>did not receive access to the purchased PDF;</li>
        <li>
          cannot access or download the product because of a technical problem; or
        </li>
        <li>
          received a file that is materially corrupted or materially different from the
          product described on our website,
        </li>
      </ul>
      <p>
        please contact us at{" "}
        <a
          href="mailto:taoq8397@gmail.com"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy-700"
        >
          taoq8397@gmail.com
        </a>
        .
      </p>
      <p>
        We will make reasonable efforts to resolve the issue, including restoring access
        or providing a replacement file where appropriate.
      </p>
      <p>
        If the issue cannot reasonably be resolved, a refund may be considered in
        accordance with the applicable refund procedures.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">
        3. Duplicate or Unauthorized Transactions
      </h2>
      <p>
        If you believe you were charged more than once for the same purchase, or believe
        a transaction was unauthorized, please contact us at{" "}
        <a
          href="mailto:taoq8397@gmail.com"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy-700"
        >
          taoq8397@gmail.com
        </a>{" "}
        as soon as possible.
      </p>
      <p>
        Refunds for transactions processed through Creem are handled through
        Creem&apos;s payment and refund procedures.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">4. Consumer Rights</h2>
      <p>
        Nothing in this Refund Policy is intended to limit, exclude, or waive any
        consumer rights, refunds, remedies, or protections that cannot legally be
        excluded or waived under applicable law.
      </p>
      <p>
        Where applicable law requires a refund or other remedy, those legal requirements
        will apply.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">5. How to Contact Us</h2>
      <p>
        For questions about access, delivery, technical problems, or refund requests,
        please contact:
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
      <p>
        Please include the email address used for your purchase and a brief description
        of the issue so that we can locate the transaction and assist you more
        efficiently.
      </p>

      <h2 className="font-display text-lg font-bold text-navy">6. Refund Processing</h2>
      <p>
        Where a refund is approved or required, the refund will be processed through the
        payment system used for the original transaction and subject to the applicable
        procedures of Creem.
      </p>
      <p>
        We do not process refunds independently outside the payment system used for the
        purchase.
      </p>
    </LegalPage>
  );
}
