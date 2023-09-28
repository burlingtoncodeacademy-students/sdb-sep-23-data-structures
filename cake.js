class Cake {
    constructor(flavor, icing = "none", decoration) {
        this.flavor = flavor || "none"
        this.icing = icing
        this.decoration = decoration
        this.size = 8
    }

    describe() {
        return ` This cake is: ${this.flavor} ${this.icing} ${this.decoration}`
    }

    eat(slice) {
        this.size -= slice
        console.log(`You have taken ${slice} slices of ${this.flavor} cake`)
    }
}

const opera = new Cake("coffee and buttercream", "chocolate ganache", "glaze")
const applePie = new Cake("apple", "crumbles", "lattice pattern")
const cheesecake = new Cake("cheese", null, "strawberry drizzle")

console.log(opera, applePie, cheesecake)
console.log(opera.describe())
console.log(applePie.describe())
console.log(cheesecake.describe())
cheesecake.eat(4)
console.log(cheesecake)

const germanChocolate = new Cake("coconut")
console.log(germanChocolate)

// ! Cool benefit of && and || logical operands
// ? || returns the first truthy value it finds
console.log("OR false/true", 0 || "potato")
console.log("OR true/false", "potato" || 0)
console.log("OR true/true", "potato" || true)

// ? && returns truthy right side value if both values are true; otherwise first falsey value
console.log("AND false/true", 0 && "potato")
console.log("AND true/false", "potato" && 0)
console.log("AND true/true", "potato1" && "potato2")
console.log("AND false/false", 0 && undefined)