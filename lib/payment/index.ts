import { CreemPaymentProvider } from "@/lib/payment/providers/creem";
import { MockPaymentProvider } from "@/lib/payment/providers/mock";
import type { PaymentProvider } from "@/lib/payment/types";

export type {
  Product,
  Order,
  Entitlement,
  PaymentProvider,
  CheckoutRequest,
  CheckoutResult,
  ProductStatus,
  OrderStatus,
  EntitlementStatus,
} from "@/lib/payment/types";

// Select the provider from env; defaults to Creem. Adding a new provider means
// a new file + one `case` here — nothing else in the app changes.
export function getPaymentProvider(): PaymentProvider {
  switch (process.env.PAYMENT_PROVIDER) {
    case "mock":
      return new MockPaymentProvider();
    // case "polar":
    //   return new PolarPaymentProvider();
    case "creem":
    default:
      return new CreemPaymentProvider();
  }
}
