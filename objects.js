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

const request = {
    username: "paull",
    password: "dbLocal"
}

const db = [
    { username: "paul" , password: "dbLocal" },
    { username: "bhoffey", password: "ilikecars123" },
    { username: "joey", password: "potato123" },
    { username: "mposnik", password: "password " }
]

// ? Build a login function
// ? Check if the user exists (by matching their username to one in the db)
// ? if they don't exist, return "user does not exist"
// ? if they do exist, check the password
// ? if password incorrect, return "incorrect password", otherwise "user logged in"

const login = () => {
    const foundUser = db.filter(usr => request.username === usr.username)
    console.log(foundUser)
    // if (!foundUser[0]) {
    //     console.log("User not found")
    // } else {
    //     if (foundUser[0].password !== request.password) {
    //         console.log("Incorrect password")
    //     } else {
    //         console.log("Logged in")
    //     }
    // }

    try {
        if (!foundUser[0]) throw new Error("User not found")
    
        if (foundUser[0].password !== request.password) throw new Error("Incorrect password")

        console.log("Logged in")
    } catch(err) {
        console.log(err.message)
    }

    console.log("Code to execute after Guard Clauses")
}

login()

/* 
    ! Challenge
    * add season3
    * it will hold properties of numberOfEpisodes and episodeInfo
    * episodeInfo will be an array of 2 objects
    * the two objects will have properties of episode & episodeName
    * fabricate their values
    ! Spicey Mode
    * numberOfEpisodes should auto-calculate how many there are instead of hardcoding the value
*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

// console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName)
netflix.seasonInfo.season3 = {
    episodeInfo: [
        {episode: 1, episodeName: "Something"},
        {episode: 2, episodeName: "Something else"}
    ]
}

netflix.seasonInfo.season3.numberOfEpisodes = netflix.seasonInfo.season3.episodeInfo.length

console.log(netflix.seasonInfo.season3)

// ! Spicey Mode - in netflix object, create totalSeasons property with dynamic value of all seasons

// console.log(Object.keys(netflix.seasonInfo).length)
netflix.totalSeason = Object.keys(netflix.seasonInfo).length
console.log(netflix)