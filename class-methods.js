/* 
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class Account {
    constructor(name, ssn, balance) {
        this.name = name
        this.ssn = ssn
        this.balance = balance
        this.acctNo = this.generateAcctNo()
    }

    generateAcctNo() {
        const min = 1000000000
        const max = 9999999999
        const randNum = Math.floor(Math.random() * (max - min + 1) + min)
        return randNum
    }

    deposit(amt) {
        this.balance += amt
    }

    withdraw(amt) {
        return this.balance < amt ? "Insufficient Funds" : this.balance -= amt
    }
}

const joey = new Account("Joey", 123456789, 1000)
console.log(joey)
const julia = new Account("Julia", 222232323, 500000)
console.log(julia)
julia.withdraw(125000)
console.log(julia)


/* 
    ? Class Inheritance
    * extends a parent class with a child class
*/

class MinorAccount extends Account {
    constructor(name, ssn, balance, isMinor) {
        // allows us to access properties and methods of a parent class
        super(name, ssn, balance)
        this.isMinor = isMinor
    }

    waiveOverdraft() {
        this.balance += 35
    }
}

const bentley = new MinorAccount("Bentley", 111111111, 50, true)
console.log(bentley)
bentley.waiveOverdraft()
console.log(bentley)

/* 
    ? Factory Functions
    * functions that accept data and return new instance of a Class
*/

class Circle {
    constructor(radius) {
        typeof radius === "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }

    circumference() {
        return 2 * Math.PI * this.radius
    }

    area() {
        return Math.PI * this.radius**2
    }
}

const myCircle = new Circle(20)
console.log(myCircle.area())
console.log(myCircle.circumference())

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

const myDiaCircle = circleFromDiameter(20)
console.log(myDiaCircle)