import { CustomFile, Folder } from './patterns/composite/composite.class';
import {
  BaseNotifier,
  EmailNotifier,
  PushNotifier,
  SMSNotifier,
} from './patterns/decorator/decorator.class';
import { LinkedList } from './patterns/iterator/iterator.class';
import {
  Caretaker,
  ConcreteMemento,
  TextEditor,
} from './patterns/memento/memento.class';
import print from './utils/print';

const editor = new TextEditor('Hola mundo');
const caretaker = new Caretaker<string>();

print('-------------------Memento-------------------');

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

print('-------------------Decorator-------------------');

// Ejemplo de uso
const baseNotifier = new BaseNotifier();
baseNotifier.send('Notificación base');

const smsNotifier = new SMSNotifier(baseNotifier);
smsNotifier.send('Notificación importante');

const emailNotifier = new EmailNotifier(baseNotifier);
emailNotifier.send('Notificación urgente');

const pushNotifier = new PushNotifier(baseNotifier);
pushNotifier.send('Notificación prioritaria');

print('-------------------Composite-------------------');
// Ejemplo de uso
const file1 = new CustomFile('Archivo1.txt', 100); // Tamaño: 100 bytes
const file2 = new CustomFile('Archivo2.txt', 200); // Tamaño: 200 bytes
const file3 = new CustomFile('Archivo3.txt', 150); // Tamaño: 150 bytes

const folder1 = new Folder('Carpeta 1');
folder1.add(file1);
folder1.add(file2);

const folder2 = new Folder('Carpeta 2');
folder2.add(file3);

const rootFolder = new Folder('Carpeta raíz');
rootFolder.add(folder1);
rootFolder.add(folder2);

print('Tamaño total de ', folder1.getName() + ': ' + String(folder1.getSize())); // Output: Tamaño total de la carpeta 1: 300
print('Tamaño total de ', folder2.getName() + ': ' + String(folder2.getSize())); // Output: Tamaño total de la carpeta 2: 150
print(
  'Tamaño total de ',
  rootFolder.getName() + ': ' + String(rootFolder.getSize())
); // Output: Tamaño total de la carpeta raíz: 450

print('-------------------Iterator-------------------');

// Ejemplo de uso
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Iterar sobre la lista enlazada utilizando el iterador
for (const item of linkedList) {
  console.log(item);
}
