// Base class - open for extension
class Payment {
    pay(amount: number) {
        console.log("processing default payment: $" + amount)
    }
}

// Extension 1: Adding credit card support
class CardPayment extends Payment {
    pay(amount: number) {
        console.log("Processed $" + amount + "Using credit card")
    }
}

//Extension 2: Adding mobile money support
class MobileMoney extends Payment {
    pay(amount: number) {
        console.log("Processed $" + amount + "Using mobile money")
    }
}

// Executing the payment options
let p1 = new CardPayment()
let p2 = new MobileMoney()

p1.pay(55)
p2.pay(140)