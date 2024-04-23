// Interfaz para el servicio de notificación genérico
interface NotificationService<T> {
  sendNotification(message: T): void;
}

// Implementación del servicio de notificación por correo electrónico
class EmailNotificationService implements NotificationService<string> {
  sendNotification(message: string): void {
    console.log(`Enviando correo electrónico: ${message}`);
  }
}

// Implementación del servicio de notificación por SMS
class SmsNotificationService implements NotificationService<string> {
  sendNotification(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

// Cliente del servicio de notificación
class NotificationClient<T> {
  private notificationService: NotificationService<T>;

  constructor(notificationService: NotificationService<T>) {
    this.notificationService = notificationService;
  }

  sendNotification(message: T): void {
    this.notificationService.sendNotification(message);
  }
}

// Uso del servicio de notificación con diferentes implementaciones
const emailNotificationService = new EmailNotificationService();
const smsNotificationService = new SmsNotificationService();

const emailClient = new NotificationClient<string>(emailNotificationService);
const smsClient = new NotificationClient<string>(smsNotificationService);

emailClient.sendNotification('¡Hola! Este es un correo electrónico.');
smsClient.sendNotification('¡Hola! Este es un mensaje de texto.');
