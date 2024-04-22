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
import { Publisher, User } from './patterns/observer/observer.class';
import {
  AudioPlayer,
  PlayingState,
  StoppedState,
} from './patterns/state/state.class';
import {
  BankTransferPaymentStrategy,
  CreditCardPaymentStrategy,
  PayPalPaymentStrategy,
  PaymentProcessor,
} from './patterns/strategy/strategy.class';
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

const baseNotifier = new BaseNotifier();
baseNotifier.send('Notificación base');

const smsNotifier = new SMSNotifier(new BaseNotifier());
smsNotifier.send('Notificación importante');

const emailNotifier = new EmailNotifier(baseNotifier);
emailNotifier.send('Notificación urgente');

const pushNotifier = new PushNotifier(baseNotifier);
pushNotifier.send('Notificación prioritaria');

print('-------------------Composite-------------------');

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
// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);

// La lista tiene un metodo para crear un iterable y a su vez un iterable tiene la proiedad de crear un iterador
const iterable = list.createIterable();
const iterator = iterable.createIterator();
// Mientras haya un siguiente elemento, se imprime el valor del nodo actual

while (iterator.hasNext()) {
  print(iterator.next());
}

print('Se elimina el utlimo elemento de la lista');
list.pop();

const iterable2 = list.createIterable();
const iterator2 = iterable2.createIterator();

while (iterator2.hasNext()) {
  print(iterator2.next());
}

print('-------------------State-------------------');

const player = new AudioPlayer();
player.changeState(new PlayingState());
player.play(); // Inicia la reproducción
player.pause(); // Pone en pausa
player.changeState(new StoppedState());
player.stop(); // Detiene la reproducción
player.play(); // Inicia la reproducción nuevamente

print('-------------------Strategy-------------------');
const paymentProcessor = new PaymentProcessor<string>(
  new CreditCardPaymentStrategy()
);
paymentProcessor.processPayment(100, 'Datos de la tarjeta de crédito');

paymentProcessor.setPaymentStrategy(new PayPalPaymentStrategy());
paymentProcessor.processPayment(50, 'Datos de la cuenta de PayPal');
paymentProcessor.setPaymentStrategy(new BankTransferPaymentStrategy());
paymentProcessor.processPayment(200, 'Datos de la cuenta bancaria');

print('-------------------Observer-------------------');
const publisher = new Publisher<string>();

// Crear usuarios (observadores)
const user1 = new User<string>('Usuario1');
const user2 = new User<string>('Usuario2');
const user3 = new User<string>('Usuario3');

// Los usuarios siguen al publicador
publisher.subscribe(user1);
publisher.subscribe(user2);
publisher.subscribe(user3);

// El publicador publica una nueva publicación
publisher.publish('¡Nueva foto de vacaciones!');

// El usuario 2 deja de seguir al publicador
publisher.unsubscribe(user2);

// El publicador publica otra nueva publicación
publisher.publish('¡Gran artículo sobre tecnología!');
