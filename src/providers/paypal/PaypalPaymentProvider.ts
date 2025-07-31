import { PaymentProvider } from '../../core/PaymentProvider';

export class PaypalPaymentProvider implements PaymentProvider {
  authorize(amount: number) {
    console.log(`[PayPal] Authorizing $${amount}`);
  }

  capture(transactionId: string) {
    console.log(`[PayPal] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string) {
    console.log(`[PayPal] Refunding transaction ${transactionId}`);
  }
}
