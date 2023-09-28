/* 
    ? State Machines
    * system with finite and defined states
    * states are just information
    * the info is reliant upon logic in order to transition or be reassigned
*/

const states = {
    il: "Illinois",
    vt: "Vermont",
    in: "Indiana",
    ma: "Massachussetts",
    de: "Delaware"
}

function lookupState(state) {
    return !states[state] ? `State not found` : states[state]
}

console.log(lookupState("pa"))
console.log(lookupState("vt"))

function getPoemTitle(author) {
    const poemTitles = {
        "Robert Frost": "Stopping by Woods on Snowy Evening",
        "Shel Silverstein": "Falling Up",
        "Sylvia Plath": ["The Bell Jar", "Lady Lazarus", "Tulips"]
    }
    return poemTitles[author]
}

console.log(getPoemTitle("Sylvia Plath"))

const light = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"],
    yellowFlash: ["red"],
    redFlash: ["green"]
}

let currentState = "red"

function changeState(newState) {
    let availableStates = light[currentState]
    
    // if (availableStates.includes(newState)) {
    //     currentState = newState
    //     return `Light is now ${currentState}`
    // } else {
    //     return `Transition from ${currentState} to ${newState} not allowed`
    // }
    
    return availableStates.includes(newState)
    ? (currentState = newState) && `Light is now ${currentState}`
    : `Transition from ${currentState} to ${newState} not allowed`
}
console.log(currentState)
console.log(changeState("green"))
console.log(currentState)