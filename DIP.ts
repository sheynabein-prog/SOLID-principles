// Abstraction: The interface that both systems must follow
interface NotificationService {
    send(message: string): void
}

// Low-Level Module 1: Specific Email system
class EmailSystem implements NotificationService {
    send(message: string) {
        console.log("Email Sent: " + message)
    }
}

// Low-Level Module 2: Specific SMS system
class SMSSystem implements NotificationService {
    send(message: string) {
        console.log("SMS Sent: " + message)
    }
}

// High-Level Module: Cleaned up with TypeScript constructor shorthand
class NotificationManager {
    private service: NotificationService

constructor(service: NotificationService) {
    this.service = service
}
    notify(message: string) {
        this.service.send(message)
    }
}

// Testing Dependency Inversion
let email = new EmailSystem()
let sms = new SMSSystem()

let appNotification = new NotificationManager(email)
appNotification.notify("Your order is ready.")

let phoneNotification = new NotificationManager(sms)
phoneNotification.notify("Your order is ready.")
