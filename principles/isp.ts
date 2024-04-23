// Interfaz genérica segregada en interfaces específicas
interface Readable<T> {
  read(): T | null;
}

interface Writable<T> {
  write(data: T): void;
}

interface MyDisposable {
  dispose(): void;
}

// Implementación de una clase genérica para un archivo
class MyFile<T> implements Readable<T>, Writable<T>, MyDisposable {
  private data: T | null;

  constructor() {
    this.data = null;
  }

  read(): T | null {
    // Lógica para leer datos del archivo
    return this.data;
  }

  write(data: T): void {
    // Lógica para escribir datos en el archivo
    this.data = data;
  }

  dispose(): void {
    // Lógica para liberar recursos del archivo
    console.log('Archivo cerrado y recursos liberados.');
  }
}

// Uso de las interfaces segregadas en una instancia de archivo
const file = new MyFile<string>();
file.write('Datos de ejemplo');
console.log(file.read()); // "Datos de ejemplo"
file.dispose(); // "Archivo cerrado y recursos liberados."
