// Definimos la interfaz para la estrategia de pago genérica
interface PaymentStrategy<T> {
  processPayment(amount: number, data: T): void;
}

// Implementaciones concretas de estrategias de pago
export class CreditCardPaymentStrategy<T> implements PaymentStrategy<T> {
  processPayment(amount: number, data: T): void {
    console.log(
      `Procesando pago de $${amount} con tarjeta de crédito. Datos adicionales:`,
      data
    );
    // Lógica específica para procesar pagos con tarjeta de crédito
  }
}

export class PayPalPaymentStrategy<T> implements PaymentStrategy<T> {
  processPayment(amount: number, data: T): void {
    console.log(
      `Procesando pago de $${amount} con PayPal. Datos adicionales:`,
      data
    );
    // Lógica específica para procesar pagos con PayPal
  }
}

export class BankTransferPaymentStrategy<T> implements PaymentStrategy<T> {
  processPayment(amount: number, data: T): void {
    console.log(
      `Procesando pago de $${amount} con transferencia bancaria. Datos adicionales:`,
      data
    );
    // Lógica específica para procesar pagos con transferencia bancaria
  }
}

// Contexto que utiliza una estrategia de pago genérica
export class PaymentProcessor<T> {
  private paymentStrategy: PaymentStrategy<T>;

  constructor(paymentStrategy: PaymentStrategy<T>) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy<T>): void {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(amount: number, data: T): void {
    this.paymentStrategy.processPayment(amount, data);
  }
}

