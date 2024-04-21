// Component: Interfaz base que define el comportamiento común para todos los objetos
interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

// Leaf: Implementación de los nodos hoja del Composite (por ejemplo, archivos individuales)
export class CustomFile implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }
}

// Composite: Implementación de los nodos compuestos del Composite (por ejemplo, carpetas que contienen archivos o subcarpetas)
export class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  public add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  public remove(component: FileSystemComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.children.reduce(
      (totalSize, child) => totalSize + child.getSize(),
      0
    );
  }
}
