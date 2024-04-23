// Implementación del servicio de registro genérico
class Logger<T> {
  log(data: T): void {
    // Lógica para registrar 'data' en un archivo de registro
    console.log(`[LOG]: ${data}`);
  }
}

// Uso del servicio de registro genérico
const logger = new Logger<string>();
logger.log('Registro de un mensaje');
