// Memento: Interfaz que define la estructura de un memento genérico.

interface Memento<State> {
  getState(): State;
}

// Originator: Clase base que define el comportamiento para guardar y restaurar el estado.

export abstract class Originator<State> {
  protected _state: State;

  constructor(state: State) {
    this._state = state;
  }

  public abstract save(): Memento<State>;
  public abstract restore(memento: Memento<State>): void;

  public get state(): State {
    return this.state;
  }

  public set state(state: State) {
    this._state = state;
  }
}

// ConcreteMemento: Implementación concreta de un memento generico
export class ConcreteMemento<State> implements Memento<State> {
  constructor(private state: State) {}

  public getState(): State {
    return this.state;
  }
}

// Caretaker: Clase que se encarga de guardar los mementos y restaurarlos.

export class Caretaker<State> {
  private mementos: Memento<State>[] = [];

  public addMemento(memento: Memento<State>): void {
    this.mementos.push(memento);
  }

  public undo(steps: number = 1): Memento<State> | undefined {
    const undoSteps = Math.min(steps, this.mementos.length - 1); // Limitar al número de mementos disponibles
    if (undoSteps > 0) {
      const undoneMemento = this.mementos[this.mementos.length - 1 - undoSteps]; // Memento que queremos deshacer
      this.mementos = this.mementos.slice(0, this.mementos.length - undoSteps); // Actualizar la lista de mementos
      return undoneMemento;
    }
  }

  public getMemento(index: number): Memento<State> {
    return this.mementos[index];
  }

  public getMementos(): Memento<State>[] {
    return this.mementos;
  }
}

// Ejemplo de uso

export class TextEditor extends Originator<string> {
  constructor(private _content: string) {
    super(_content);
    this._state = _content;
  }

  public save(): Memento<string> {
    return new ConcreteMemento(this._state);
  }

  public restore(memento: Memento<string>): void {
    this._state = memento.getState();
  }

  public get content(): string {
    return this._state;
  }

  public set content(content: string) {
    this._state = content;
  }
}
