// Definimos la interfaz para los observadores (usuarios que reciben notificaciones)
interface Observer<T> {
  notify(data: T): void;
}

// Implementación de un observador genérico (usuario que recibe notificaciones)
export class User<T> implements Observer<T> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(data: T): void {
    console.log(`${this.name} recibió una notificación:`, data);
  }
}

// Implementación del sujeto (usuario que publica una nueva publicación)
export class Publisher<T> {
  private observers: Observer<T>[] = [];

  // Método para que los observadores se suscriban
  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  // Método para que los observadores se desuscriban
  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Método para publicar una nueva publicación
  publish(data: T): void {
    console.log('Publicando nueva publicación:', data);
    this.notifyObservers(data);
  }

  // Método para notificar a los observadores (seguidores)
  private notifyObservers(data: T): void {
    this.observers.forEach((observer) => observer.notify(data));
  }
}
