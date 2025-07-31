import { PaymentProviderFactory } from '../core/PaymentProviderFactory';

export class PaymentContext {
  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();

    provider.authorize(amount);

    const transactionId = this.getTransactionId();

    provider.capture(transactionId);
    provider.refund(transactionId);
  }

  private getTransactionId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
