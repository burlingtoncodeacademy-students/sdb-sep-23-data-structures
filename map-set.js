/* 
    ? Map
    * key-value pair
    * remembers insertion order
    * map keys are unique
    * useful for matrice/ix (multi-dimensional arrays)
*/

const myMap = new Map()
console.log(myMap)

myMap.set("sales", [20, 50, 70, 90])
console.log(myMap)
myMap.set("items", ["beer", "wine", "tequila", "bourbon"])
console.log(myMap)

const str = "5.0,15,4.0,25,3.0,10:L10;5.0,18,4.0,42,3.0,12:L20";
// 1 Sanitize the data
// 2 Display it as a matrice like this:
/* 
    -------------------------
    Rates | Lock 10 | Lock 20
    -------------------------
    5.0   |   15   |   18
    -------------------------
    4.0   |   25   |   42
    -------------------------
    3.0   |   10   |    12
*/

