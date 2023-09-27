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