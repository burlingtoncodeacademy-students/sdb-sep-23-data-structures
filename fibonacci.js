function fibonacci(length) {
    let series = [0, 1]
    while (series.length < length) {
        let secondNum = series.pop()
        let firstNum = series.pop()
        let sum = firstNum + secondNum
        series.push(firstNum, secondNum, sum)
    }
    console.log(series)
}

function fib(length) {
    let series = [0, 1]
    for (let i = 0; i <= length; i++) {
        series.push(series[series.length - 1] + series[series.length - 2])
    }
    console.log(series)
}

// console.log(series.join("\n"))

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ask = q => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

const start = async () => {
    const ans = await ask("Give me a number to count to: ")
    fibonacci(ans)
    // fib(ans)
    rl.close()
}

start()