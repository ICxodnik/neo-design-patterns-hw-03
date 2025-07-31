import { PaymentProvider } from '../../core/PaymentProvider';

export class ApplePaymentProvider implements PaymentProvider {
  authorize(amount: number) {
    console.log(`[ApplePay] Authorizing $${amount}`);
  }

  capture(transactionId: string) {
    console.log(`[ApplePay] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string) {
    console.log(`[ApplePay] Refunding transaction ${transactionId}`);
  }
}
