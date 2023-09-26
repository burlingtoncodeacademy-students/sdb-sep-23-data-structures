function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function titleize(str) {
    // const strArr = str.split(" ")
    // const result = strArr.map(word => capitalize(word))
    // return result.join(" ")


    // ? Capitalize first word
    // const strArr = str.split(" ")
    // strArr[0] = capitalize(strArr[0])
    // return strArr.join(" ")

    return str.split(" ").map(word => capitalize(word)).join(" ")   
}

let juliasStory = "julia wonders if we drop a variable in the function"

// console.log(titleize(juliasStory))
// console.log(titleize("the cat in the hat has wheels"))
// console.log(titleize("490 thousand dollars for one effin dinner?!"))
// console.log(titleize("My nayme ez Jeff"))

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ask = q => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

async function start() {
    const question = await ask("Sentence please: ")
    console.log(titleize(question))
    rl.close()
}

start()