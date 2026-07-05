// Class 1: Only handles checkout and payments
class Cashier {
    pay(orderId: string, amount: number) {
        console.log('Cashier: Processed payment of $' + amount + ' for ' + orderId)
    }
}

// Class 2: Only handles tracking warehouse stock
class InventoryManager {
    update(itemId: string, quantity: number) {
        console.log('Inventory: Deducted ' + quantity + ' item(s) for ' + itemId)
    }
}

// Creating the separate objects
let cashierObj = new Cashier()
let inventoryObj = new InventoryManager()

// Running the separate tasks step by step
cashierObj.pay('order123', 100)
inventoryObj.update('item456', 4)
