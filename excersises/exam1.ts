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

    return nodosCumplen;
  }

  public getHijos(): Nodo<T>[] {
    return this.hijos;
  }

  aplicar(f: Funcion<T>, p: Predicado<T>): void {}
}

// #endregion

// #region Pregunta 2

// Mera teoria

// #endregion

// #region Pregunta 3


// #endregion

// #region Pregunta 4


// #endregion

// #region Pregunta 5
