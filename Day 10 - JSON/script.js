// Javascript Objection Notation (JSON) is used for exchanging data between a server and a web application.
// JSON files {key:value} or [value1, value2, value3]

// JSON.stringify() =  converts a JS Object to a JSON string.
// JSON.parse() = converts a JSON string to a JS Object

// The difference is the key of a JSON object should be with double quotes or it should be a string. 
// JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.


const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Cooking"]
}

const jsonPerson = JSON.stringify(person)
console.log(jsonPerson)

const people = [
    {"name": "Spongebob",
    "age": 30,
    "isEmployed": true,}, 

    {"name": "Squidward",
    "age": 50,
    "isEmployed": true,}, 

    {"name": "Patrick",
    "age": 34,
    "isEmployed": false,}
]

const jsonPeople = JSON.stringify(people)
console.log(jsonPeople)

// Now lets try parsing!
// JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/
const personJSON = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Cooking"]
}`

const personNormal = JSON.parse(personJSON)
console.log(personNormal)

const usersText = `{
"users":[
  {
    "firstName":"Chin",
    "lastName":"Moy",
    "age":350,
    "email":"chin@chin.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)

// We can watch use fetch() with JSON.

// fetch("person.json")
//    .then(response => response.json())
//    .then(value => console.log(value))