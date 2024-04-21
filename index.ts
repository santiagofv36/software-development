import {
  Caretaker,
  ConcreteMemento,
  TextEditor,
} from './patterns/memento/memento.class';
import print from './utils/print';

const editor = new TextEditor('Hola mundo');
const caretaker = new Caretaker<string>();

// Guardamos el estado actual
caretaker.addMemento(editor.save());
print(editor.content); // Output: Hola mundo

// El usuario edita el contenido del editor (Uso del metodo de la clase no es asignacion directa de la propiedad)
editor.content = 'Contenido editado';

// Guardamos el estado actual después de la edición
caretaker.addMemento(editor.save());
print(editor.content); // Output: Contenido editado

// El usuario edita nuevamente el contenido
editor.content = 'Contenido editado de nuevo';

// Guardamos el estado actual después de la segunda edición
caretaker.addMemento(editor.save());
print(editor.content); // Output: Contenido editado de nuevo

print(caretaker.getMementos());

// Restauramos el estado anterior
editor.restore(caretaker.undo() ?? new ConcreteMemento<string>(''));
// print(caretaker.undo());

print(caretaker.getMementos());
print(editor.content); // Output: Contenido editado
