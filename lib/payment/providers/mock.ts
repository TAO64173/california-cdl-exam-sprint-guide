import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "@/lib/payment/types";

// Test-only provider. Does not touch real money; points the user at the access
// boundary. Used when PAYMENT_PROVIDER=mock.
export class MockPaymentProvider implements PaymentProvider {
  readonly id = "mock";

  async createCheckout(_request: CheckoutRequest): Promise<CheckoutResult> {
    return { provider: this.id, checkoutUrl: "/access" };
  }

  verifyWebhook(_rawBody: string, _signature: string): boolean {
    return false;
  }
}
