/* 
    ? Object Methods
    * functions which work on a particular object type
    * have access to the global scope
    * require "this" to have access to the object scope
*/
const brandonsChecking = {
    name: "Brandon Hoffey",
    acct: 1255789,
    routing: 1111,
    type: "checking",
    amount: 0,

    checkBalance() {
        return `The balance is: ${this.amount}`
    },

    deposit: function(amt) {
        this.amount += amt
        return `Your current balance is ${this.amount}`
    },

    // withdraw: (amt) => {
    //     this.amount -= amt
    //     return `Your current balance is ${this.amount}`
    // }
    // ! DO NOT USE -> No binding to .this

    withdraw(amt) {
        return this.amount < amt
            ? "Insufficient Funds"
            : this.amount = this.amount - amt
    }
}

console.log(brandonsChecking)
console.log(brandonsChecking.checkBalance())
console.log(brandonsChecking.deposit(1000000))
console.log(brandonsChecking.withdraw(1250000))

const toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    add(item, list) {
        return this[list].push(item)
    },

    clearToDo() {
        this.today = []
        this.tomorrow = []
        this.urgent = []
    }
}

toDo.add("interview practice", "today")
toDo.add("get dinner", "today")
toDo.add("watch john wick", "urgent")
console.log(toDo)
toDo.clearToDo()
console.log(toDo)

/* 
    ! Challenge
    * build a method that will look for an item in particular list and only remove that item
*/