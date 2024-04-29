// Interfaz para la regla de validación genérica
interface ValidationRule<T> {
  isValid(data: T): boolean;
}

// Implementación de una regla de validación para números positivos
class PositiveNumberRule implements ValidationRule<number> {
  isValid(data: number): boolean {
    return data > 0;
  }
}

class NegativeNumberRule implements ValidationRule<number> {
  isValid(data: number): boolean {
    return data < 0;
  }
}

// Implementación de una regla de validación para cadenas no vacías
class NonEmptyStringRule implements ValidationRule<string> {
  isValid(data: string): boolean {
    return data.trim() !== '';
  }
}

// Implementación del servicio de validación genérico
class Validator<T> {
  private rules: ValidationRule<T>[] = [];

  addRule(rule: ValidationRule<T>): void {
    this.rules.push(rule);
  }

  validate(data: T): boolean {
    return this.rules.every((rule) => rule.isValid(data));
  }
}

// Uso del servicio de validación genérico
const validator = new Validator<number>();
validator.addRule(new PositiveNumberRule());
console.log(validator.validate(10)); // true
console.log(validator.validate(-5)); // false
