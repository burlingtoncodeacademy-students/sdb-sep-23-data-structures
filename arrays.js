/* 
    ? Array
    * list-like object
    * reference data type
    * denoted by [ ]
    * hold multiple data types
    * content can be accessed by their index
*/

// ? Array creation using array literal

let arr = []
console.log(arr)
console.log(Boolean(arr)) // ! empty arrays return true

// ? How would we check if an array is empty?

arr ? console.log("Not Empty") : console.log("Empty")
// !WRONG returns "not empty" because array ALWAYS returns true

arr.length === 0 ? console.log("Empty") : console.log("Not empty")

arr[0] ? console.log("Not empty") : console.log("Empty")

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an array
console.log(carMake[1]) // displays value at an index
console.log(carMake[7]) // if !found, returns undefined

// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari"
console.log(carMake)

carMake[carMake.length] = "Aston Martin"
console.log(carMake)

// Assign index to a different variable
let bmw = carMake[0]
console.log(bmw)

// Reassigning Values
carMake[0] = "Yugo"
console.log(carMake)

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "Subaru"]
console.log(carMake)
console.log(carMake[6][2])

console.log(carMake[1][0])

// ? Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 6, true, "some other string"],
    false,
    undefined,
    null,
    true,
    NaN,
    "another string"
]

console.log(manyDataTypes)

// ? Data Type
console.log(typeof manyDataTypes)
// returns object due to JS' OOP nature

// ? How can we check if this is an array?

// Array creation using Array constructor
let newArr = new Array("milk", "cookies", "stuff")
console.log(newArr)

// Check if data type is an array
console.log(manyDataTypes instanceof Array)

/* 
    ! Challenge
    * create a variable named sepCohort
    * include names of several of your peers (at least 4)
    * nest an array with an instructor names (Paul, Henry, and Mary)
    * access Mary's name and reassign to potato
    * access Paul's name and reassign to HeadPotato
    ! Spicey Mode
    * remove the last entry within the nested array
*/

let sepCohort = ["Dan", "Brandon", "Mike", "Isaiah"]

sepCohort[sepCohort.length] = ["Paul", "Henry", "Mary"]
console.log(sepCohort)
sepCohort[4][2] = "potato"
console.log(sepCohort)
sepCohort[4][0] = "Bentley the boss lady"
console.log(sepCohort)

// sepCohort[4].splice(2, 1)
// console.log(sepCohort)

// sepCohort[4][sepCohort[4].length - 1] = undefined
// console.log(sepCohort)