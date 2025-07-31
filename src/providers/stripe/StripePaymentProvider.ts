import { PaymentProvider } from '../../core/PaymentProvider';

export class StripePaymentProvider implements PaymentProvider {
  authorize(amount: number) {
    console.log(`[Stripe] Authorizing $${amount}`);
  }

  capture(transactionId: string) {
    console.log(`[Stripe] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string) {
    console.log(`[Stripe] Refunding transaction ${transactionId}`);
  }
}
