/* 
    ? Objects
    * container for values in JavaScript Object Notation Format (JSON)
    * exists as a string
    * denoted by { }
    * not indexable
    * has properties & methods
        * .property (ex: .length)
        * .method (ex: .split())
    * has .this keyword which deals with scope
*/

// ? Object Literal Creation

let bentley = {
    // property: value,
    // key: value pairs
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldoggee",
    weight: 72,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

// Returns data type of objet and our object literal
console.log(typeof bentley, bentley)

// Pretty display in a table
console.table(bentley)

// Returns undefined because objects are NOT indexable
console.log(bentley[0])

// ? Accessing properties and values

// using dot notation
console.log(bentley.breed)

// using keys
console.log(bentley["favoriteActivity"])

// ? Viewing object keys and values
console.log(Object.keys(bentley))
console.log(Object.values(bentley))
// They return arrays so they can be used with array methods

/* 
    ! Challenge
    * how would you iterate over Bentley's favorite activity using for each?
*/

bentley.favoriteActivity.forEach(i => console.log(i))

// ? Adding properties and values

const porsche = {
    make: "Porsche",
    model: "911",
    mileage: 28000
}

console.log("Original Porsche", porsche)

porsche.hasSportExhaust = true
console.log(porsche)
porsche["transmission"] = "PDK"
console.log(porsche)

// ! You don't want spaces in property names !
// porsche["has friends"] = ["cayman", "boxter"]
// console.log(porsche)

// ? Modifying properties and value
// porsche.mileage = porsche.mileage + 50000
porsche.mileage = 50000
porsche["transmission"] = "manual"

console.log(porsche)

/* 
    * Makeshift example of a database and incoming object
    * Matching users and passwords between database and incoming object
*/

