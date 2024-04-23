// Interfaz para la forma geométrica genérica
interface Shape<T> {
  area(): number;
}

// Implementación de una clase genérica para un cuadrado
class Square<T> implements Shape<T> {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  area(): number {
    return this.sideLength * this.sideLength;
  }
}

// Implementación de una clase genérica para un círculo
class Circle<T> implements Shape<T> {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Uso de la jerarquía de clases genéricas
const square = new Square<number>(5);
const circle = new Circle<number>(3);

console.log(square.area()); // 25
console.log(circle.area().toFixed(2)); // 28.27
