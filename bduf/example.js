// BDUF (Big Design Up Front) - Предварительный большой дизайн
// Плохой код: чрезмерное проектирование перед началом работы

// #1
// ХОРОШО: Начинаем с простой реализации
// (требование: "Нужно отправлять email и SMS")

function sendEmail(to, message) {
  // Простая реализация
  console.log(`Sending email to ${to}: ${message}`);
}

function sendSMS(to, message) {
  // Простая реализация
  console.log(`Sending SMS to ${to}: ${message}`);
}

// Использование:
await sendEmail("user@example.com", "Hello");
await sendSMS("+1234567890", "Hello");

// Если позже понадобится унифицированный интерфейс - рефакторим:
class NotificationService {
  static async sendEmail(to, message) {
    /* ... */
  }
  static async sendSMS(to, message) {
    /* ... */
  }
}

// ПЛОХО: Создание сложной абстракции для простого требования

// Создаем сложную систему абстракций
class MessageSender {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  async send(message, recipient) {
    return this.strategy.send(message, recipient);
  }
}

class MessageStrategy {
  send(message, recipient) {
    throw new Error("Method not implemented");
  }
}

class EmailStrategy extends MessageStrategy {
  async send(message, recipient) {
    // Сложная реализация отправки email
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

class SMSStrategy extends MessageStrategy {
  async send(message, recipient) {
    // Сложная реализация отправки SMS
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

// Фабрика для создания отправителей
class MessageSenderFactory {
  static createEmailSender() {
    return new MessageSender(new EmailStrategy());
  }

  static createSMSSender() {
    return new MessageSender(new SMSStrategy());
  }
}

// Использование:
const emailSender = MessageSenderFactory.createEmailSender();
await emailSender.send("Hello", "user@example.com");
