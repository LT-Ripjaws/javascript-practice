//-------------------------
const arr = [1,2,3,4,5];
console.log("Numbers:", arr);
console.log("Number of numbers:", arr.length); //use .length to check for length


const fruits = ['banana', 'apple', 'orange'];
if (fruits.indexOf('avocado') === -1) //.indexOf returns the index and if its -1 then it means its not present
{
    console.log ("It does not exists")
} 
else console.log("It exists")

if (fruits.includes("banana")) //.includes checks if anything we searched for exists.
{
    console.log ("YAY BANANA IS HERE!")
}
else console.log ("its not here :(")

//-------------------------
const numbers = [1, 2, 2, 3, 1, 4, 3];

const deduped = [...new Set(numbers)];

console.log("Deduped values",deduped);

const uniques = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
console.log("unique values:",uniques);
//-------------------------
const nums = [10, 20, 30, 40];

const total = nums.reduce((acc, current) => acc + current,0);
console.log("Total amount:",total);
//-------------------------
const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 40 }
];

const groupByAge = people.reduce((acc, person) => {
        const key = person.age;
         if (!acc[key]) {
         acc[key] = [];
        }
        acc[key].push(person);
        return acc; 
}, {});

console.log(groupByAge);
//-------------------------

let arr1 = new Array(5);
console.log(arr1);
console.log("Length of array: ", arr1.length);

arr1 = [1,2,3,4,5];
console.log("Initial value:", arr1[0]);
middleindex = parseInt(5/2);
console.log("Middle Value: ",arr1[middleindex]);
console.log("Last value: ",arr1[arr1.length-1]);

const mixedDataTypes = ['integer', 'float', 'boolean', 'string', 'double', 'array'];
console.log("Length of mixed data types array:",mixedDataTypes.length);

console.log("Using for ..of method"); //printing all the elements one by one using two diff methods, for...of and forEach
for(const datatypes of mixedDataTypes){
    console.log(datatypes);
}
console.log("Using forEach method");
mixedDataTypes.forEach((datatype)=>{  //element,index, array provided.
    console.log(datatype);
    upped = datatype.toUpperCase();
    console.log(upped);
})


console.log("using for loop")
for(i=0; i<mixedDataTypes.length;i++)
{
    console.log(fruits[i]);
}


// we aim to print it out as a sentence like all the elements are great data structures. So first we slice the array before the last elmt and turn it to a string, then we add a 'and' then 
//slice the array with the last element and turn it to a string then print it out.
console.log((mixedDataTypes.slice(0,mixedDataTypes.length-2)).toString(), "and", (mixedDataTypes.slice(length-1)).toString(), "are great data structures");

//Here we check if a certain data-structure exists, we could have done with indexOf too, just add if(mixedDataTypes.indexOf() === -1 then it no exist, else `${exists}`)
let exists = "integer";
if (mixedDataTypes.includes(exists))
    console.log(`Yes it does: ${exists}`)
else
    console.log("It does not exist")

// HEre we are filtering the companies that only have 1 o inside, case-insensitive
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
const filteredItCompanies = itCompanies.filter(companies => (companies.match(/o/gi) || []).length === 1);
console.log(filteredItCompanies);

