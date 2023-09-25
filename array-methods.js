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

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Arkansas",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

console.log(states.length)

// for (state of states) {
//     console.log(state)
// }

/* 
    ? .forEach()
    * executes a callback function once for each item in an array
    * callback has three parameters:
        * value - the iterator
        * index - of each iterable
        * array - the entire array .forEach was called upon
*/

// states.forEach((state, index, arr) => console.log(state, index, arr))

/* 
    ! Challenge
    * create a variable startsWithA and initialize an empty array
    * use .forEach
    * check if each state starts with letter a
    * if it does, push it to the new array
*/

let startsWithA = []
let statesWithoutA = []

states.forEach(state => {
    state[0] === "A" ? startsWithA.push(state) : statesWithoutA.push(state)
})
console.log(startsWithA)
console.log("----------")
console.log(statesWithoutA)

// TODO: Reintroduce a duplicate state. Think algorithmically how you could find a duplicate.

/* 
    ? .map()
    * creates an array with elements resulting from the callback fx
*/

let statesUpperCase = states.map(state => state.toUpperCase())
console.log(statesUpperCase)

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only filtered items can be added to an array
    * cannot have (if/else) where else also gets added
*/

let weHateA = states.filter(state => !state.toLowerCase().includes("a"))
console.log(weHateA)

/* 
    ! Challenge
    * utilize one of the array methods to raise the grade by 15 points for everyone
    * those above 90 should not get any points
*/

let grades = [22, 57, 98, 72, 54, 81, 84, 3]

let newGrades = grades.map(grade => grade >= 90 ? grade : grade + 15)
console.log(newGrades)

/* 
    ? .reduce()
    * calls callback on arr elements with calculation of preceeding element
    * start vaue is initialValue or [0] of an array on which it's called
*/

let numbers = [1, 2, 3, 4, 5, 6, 7]
let initialValue = 5
let sum = numbers.reduce((prevValue, currValue) => prevValue + currValue, initialValue)
console.log("HERE", sum)

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
