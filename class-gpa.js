const grades = {
    midterm: { grade: 3.3, weight: 1 },
    project: { grade: 4.0, weight: 1 },
    final: { grade: 3.2, weight: 2 }
}

const gpa = obj => {
    const gradesToWeight = Object.keys(obj)
    let gradeSum = 0
    let weightSum = 0
    gradesToWeight.forEach(key => {
        gradeSum += obj[key].grade * obj[key].weight
        weightSum += obj[key].weight
    })
    return gradeSum / weightSum
}

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = q => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

const start = async () => {
    grades.midterm.grade = Number(await ask("Enter midterm grade: "))
    grades.project.grade = Number(await ask("Enter project grade: "))
    grades.final.grade = Number(await ask("Enter final grade: "))

    console.log(gpa(grades))
    rl.close()
}

start()