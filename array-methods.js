/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object we're working on
    * Ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Mary Reagan", "Henry Dufour"],
    ["Lulu Browne", "Julie Assur"]
]

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let pushReturn = educationTeam.push(["Benny Boas"])
console.log("Value", educationTeam, "Return of .push()", pushReturn)

/* 
    ? .pop()
    * removes last array element
    * returns the last element
    * if array is empty, it returns undefined
*/

let popReturn = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", popReturn)

/* 
    ? .unshift()
    * adds element to the beginning of an array
    * returns the length of an array
*/

let unshiftReturn = educationTeam.unshift("Upright Education")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)

/* 
    ? .shift()
    * removes the first element from an array
    * returns removed element
    * if array is empty, it returns undefined
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

/* 
    ? .at()
    * takes integer (positive or negative for forward/backward count)
    * returns items at that index
*/

console.log(educationTeam[0].at(-1))

/* 
    ? .join()
    * creates and returns str joining all arr elements using separator
*/

console.log(educationTeam[0].join(" "))

/* 
    ? .flat()
    * new
    * recursively tears down nested arrays and groups values into single outermost array
*/

let flatEducation = educationTeam.flat()
console.log(flatEducation)

/* 
    ? .sort()
    * sorts array elements
    * default -> ascending
    * mutates original arrayß
*/

flatEducation.sort()
console.log(flatEducation)

/* 
    ? .concat()
    * merges separate arrays
*/

let europeanCars = ["BMW", "Porsche", "Audi"]
let imports = ["Kia", "Subaru", "Toyota", "Mazda"]
let cars = europeanCars.concat(imports)
console.log("Euro only", europeanCars, "Imports only", imports, "All", cars)

/* 
    ? Array Destructuring
    * [...]
    * a way to unpack values from arrays or propreties from objects
*/

console.log(educationTeam)

let destructuredEducation = [...educationTeam[0], ...educationTeam[1], ...educationTeam[2]]
console.log(destructuredEducation)

// ? Advanced Array Methods