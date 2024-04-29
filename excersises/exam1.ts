// #region Pregunta 1

interface Predicado<T> {
  cumple(t: T): boolean;
}

interface Funcion<T> {
  aplicar(t: T): void;
}

class Nodo<T> {
  public name: string;
  protected valor: T;
  protected predicado: Predicado<T>;
  private funcion: Funcion<T> | null;
  protected hijos: Nodo<T>[] = [];
  private nodoInterno: NodoCompuesto<T> | null = null;

  constructor(
    name: string,
    valor: T,
    predicado: Predicado<T>,
    funcion: Funcion<T> | null = null
  ) {
    this.name = name;
    this.valor = valor;
    this.predicado = predicado;
    this.funcion = funcion;
  }

  cumple(p: Predicado<T>): number {
    let nodosCumplen = 0;

    if (this.predicado.cumple(this.valor)) {
      nodosCumplen++;
    }

    for (const hijo of this.hijos) {
      nodosCumplen += hijo.cumple(p);
    }

    if (this.nodoInterno) {
      nodosCumplen += this.nodoInterno.cumple(p);
    }

    return nodosCumplen;
  }

  public getHijos(): Nodo<T>[] {
    return this.hijos;
  }

  aplicar(f: Funcion<T>, p: Predicado<T>): void {}
}

class NodoCompuesto<T> extends Nodo<T> {
  cumple(p: Predicado<T>): number {
    let nodosCumplen = 0;

    if (this.predicado.cumple(this.valor)) {
      nodosCumplen++;
    }

    for (const hijo of this.hijos) {
      nodosCumplen += hijo.cumple(p);
    }

    return nodosCumplen;
  }

  public getHijos(): Nodo<T>[] {
    return this.hijos;
  }

  aplicar(f: Funcion<T>, p: Predicado<T>): void {}
}

class PredicadoNumber implements Predicado<number> {
  cumple(t: number): boolean {
    return t % 2 !== 0;
  }
}

const p = new PredicadoNumber();

const nodo1 = new Nodo<number>('nodo 1', 1, p);
const nodo2 = new Nodo<number>('nodo 2', 2, p);
const nodo3 = new Nodo<number>('nodo 3', 3, p);
const nodo4 = new Nodo<number>('nodo 4', 4, p);
const nodo5 = new Nodo<number>('nodo 5', 5, p);

const nodoCompuesto = new NodoCompuesto<number>('Nodo compuesto', 0, p);

nodoCompuesto.getHijos().push(nodo1, nodo2, nodo3);

nodo2.getHijos().push(nodo4);
nodo3.getHijos().push(nodo5);

const cantidadCumple = nodoCompuesto.cumple(p);
console.log('Cantidad que cumplen', cantidadCumple);

// #endregion

// #region Pregunta 2

// Mera teoria

// #endregion

// #region Pregunta 3

// #endregion

// #region Pregunta 4

interface UIComponent<T> {
  build(): void;

  changeState(state: T): void;

  observers: Component<T>[];
}

class Component<T> implements UIComponent<T> {
  observers: Component<T>[] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  build(): void {
    console.log('Renderizando pantalla de', this.name);
  }

  changeState(state: T): void {
    console.log('Cambiando estado del componente concreto', state, this.name);
    this.notify(state);
  }
  // subscribe
  addObserver(observer: Component<T>): void {
    this.observers.push(observer);
  }
  // unsubscribe
  removeObserver(observer: Component<T>): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(state: T): void {
    this.observers.forEach((o) => o.changeState(state));
  }

  addChild(child: Component<T>): void {
    throw new Error('Method not implemented');
  }

  removeChild(child: Component<T>): void {
    throw new Error('Method not implemented');
  }
}

class Decorator<T> implements UIComponent<T> {
  observers: Component<T>[] = [];

  constructor(private component: Component<T>) {}

  build(): void {
    this.component.build();
    this.decorate();
  }

  changeState(state: T): void {
    this.component.changeState(state);
  }

  addObserver(observer: Component<T>): void {
    this.component.addObserver(observer);
  }

  removeObserver(observer: Component<T>): void {
    this.component.removeObserver(observer);
  }

  notify(state: T): void {
    this.component.notify(state);
  }

  addChild(child: Component<T>): void {
    this.component.addChild(child);
  }

  removeChild(child: Component<T>): void {
    this.component.removeChild(child);
  }

  decorate(): void {
    console.log('Agregando imagen a la interfaz');
  }
}

const newDecorator = new Decorator<string>(
  new Component<string>('Component decorated')
);
const component = new Component<string>('Component');

newDecorator.addObserver(component);
component.build();

newDecorator.changeState('Nuevo estado');

newDecorator.build();

// #endregion

// #region Pregunta 5
