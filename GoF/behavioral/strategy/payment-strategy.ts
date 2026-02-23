// Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Redirecting to PayPal to pay $${amount}`);
  }
}

class CryptoPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Sending $${amount} via Bitcoin network`);
  }
}

// Context
class Checkout {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setPaymentMethod(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public processOrder(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Usage
const checkout = new Checkout(new CreditCardPayment());
checkout.processOrder(100); // Processing credit card payment of $100

// Change strategy at runtime
checkout.setPaymentMethod(new CryptoPayment());
checkout.processOrder(250); // Sending $250 via Bitcoin network
