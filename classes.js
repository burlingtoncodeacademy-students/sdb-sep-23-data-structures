/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based langauge with access to OOP principles
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
        ! NEITHER ARE HOISTED
*/

// ? Class Declaration

class Learner {
    constructor(name, city, cohort) {
        this.name = name
        this.city = city
        this.cohort = cohort
        this.scholarships = 7500
    }
}

// ? Create a new instance of a Learner class
const khale = new Learner("Khale", "Brownsville", "sdb-sep-23")
console.log(khale)

// ? Prototype Chaining
console.log(typeof khale)
console.log(khale instanceof Learner)
console.log(Learner instanceof Object)
console.log(khale instanceof Object)

// ? Accessing object instance values
console.log(new Learner())
khale.scholarships = 10000
console.log(khale.scholarships)

// ? Class Expression

const House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

let $1007OrangeSt = new House("1007 Orange St", 3, 2)

console.log($1007OrangeSt)