// Parent class
class vehicle {
    startEngine() {
        console.log("Vehicle engine started")
    }
}

// child class 1: Safely behaves like a vehicle 
class Car extends vehicle {
    startEngine() {
        console.log("Car engine started cleanly.")
    }
}

// child class 2: safely behaves like a vehicle
class Motorcycle extends vehicle {
    startEngine() {
        console.log("Motorcycle engine started cleanly.")
    }
}

// Testing substitution (Subclasses replacing parent variables)
let v1: vehicle = new Car()
let v2: vehicle = new Motorcycle()

v1.startEngine()
v2.startEngine()