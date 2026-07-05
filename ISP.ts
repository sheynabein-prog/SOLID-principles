// Interface 1: only for working tasks
interface worker {
    work(): void
}

// Interface 2: only for eating habits
interface eater {
    eat(): void
}

// Human nedds to do both tasks
class Human implements worker, eater {
    work() {
        console.log("Human is working on coding tasks.")
    }
    eat() {
        console.log("Human is eating lunch.")
    }
}

// Robot only implements worker (completely skips eater!)
class Robot implements worker {
    work() {
        console.log("Robot is working non-stop on assembly.")
    }
}

// Testing the segregated objects
let person = new Human()
let machine = new Robot()

person.work()
person.eat()

machine.work() // Clean! The Robot is never forced to write a fake eat function.