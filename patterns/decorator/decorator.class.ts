// Component: Interfaz base que define el comportamiento común para todos los objetos
interface Notifier {
  send(message: string): void;
}

// ConcreteComponent: Implementación concreta del Componente
export class BaseNotifier implements Notifier {
  public send(message: string): void {
    console.log('Enviando notificación:', message);
  }
}

// Decorator: Clase base abstracta que extiende el comportamiento del Componente
abstract class NotifierDecorator implements Notifier {
  protected notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  public send(message: string): void {
    this.notifier.send(message);
  }
}

// ConcreteDecorator: Implementación concreta del Decorator
export class SMSNotifier extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  public send(message: string): void {
    super.send(`Enviando SMS: ${message}`);
  }
}

export class EmailNotifier extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  public send(message: string): void {
    super.send(`Enviando Email: ${message}`);
  }
}

export class PushNotifier extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }

  public send(message: string): void {
    super.send(`Enviando Push: ${message}`);
  }
}
