const menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 7.25,

    order(orderPlaced) {
        let orderSplit = orderPlaced.split(", ")
        let sum = 0
        orderSplit.forEach(item => {
            !Object.keys(this).includes(item)
                ? console.log(`${item} not found`)
                : sum += this[item]
        })
        console.log(sum)
    }
}

menu.order("burger, fries, potato")
