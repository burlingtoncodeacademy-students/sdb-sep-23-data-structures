class Location {
    constructor(name, description) {
        this.name = name
        this.description = description
    }
}

const home = new Location("home", "123 Main St")
const sidewalk = new Location("sidewalk", "covered in vomit")
const store = new Location("store", "Local bodega")
console.log(home, sidewalk, store)

let locationCurrent = "home"
const locationLookup = {
    // home: home,
    // sidewalk: sidewalk,
    // store: store
    home,
    sidewalk,
    store
}

const locationStates = {
    home: ["sidewalk"],
    sidewalk: ["home", "store"],
    store: ["sidewalk"]
}

function moveLoccation(newLocation) {
    if (locationStates[locationCurrent].includes(newLocation)) {
        locationCurrent = newLocation
        console.log(`You're at the ${locationLookup[locationCurrent].name} and it's ${locationLookup[locationCurrent].description}`)
    } else {
        console.log(`Cannot go from ${locationCurrent} to ${newLocation}`)
    }
}

moveLoccation("sidewalk")
moveLoccation("home")
moveLoccation("store")
