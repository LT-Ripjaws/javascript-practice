// Arrays that have objects inside it.

const fruits = [
    {
        name: "Apple",
        color: "Red",
        calories: 95
    },
    {
        name: "Banana",
        color: "Yellow",
        calories: 105
    },
    {
        name: "Orange",
        color: "orange",
        calories: 45
    }
]

console.log(fruits[0].name)

fruits.push({name: "Grapes", color: "purple", calories: 62})

console.log(fruits)

// fruits.splice(1, 2)

fruits.forEach((fruit) => console.log(fruit.name) ) // we looping thru and printing the names

const fruitnames = fruits.map(fruit => fruit.name) // maps a new array containing fruit names
console.log(fruitnames)