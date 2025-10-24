// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// // Iterate 0 to 10 using for loop, do the same using while and do while loop

// for(const country of countries){
//     console.log(country);
// }

// for(let i = 0; i < countries.length; i++)
// {
//     console.log(countries[i]);
// }

// let i = 0;
// while(i<countries.length)
// {
//     console.log(countries[i]);
//     i++;
// }

// let y = 0;
// do{
//     console.log(countries[y])
//     y++
// }while( y < countries.length);

// // Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let i=countries.length-1; i>=0; i--)
// {
//     console.log("for loop:",countries[i])
// }

// for(let country of [...countries.reverse()]){
//     console.log("Reversed using for..of and spread:",country)
// }

// let a = countries.length -1;
// while(a >= 0)
// {
//     console.log("while:", countries[a])
//     a--
// }

// b = countries.length - 1;
// do{
//     console.log("Dowhile:",countries[b])
//     b--;
// }while(b>=0)

// // Write a loop that makes the following pattern using console.log():

// let str = '#'
// for(let c = 0; c < 7; c++)
// {
//     console.log(str)
//     str = str.concat('#')
// }

// let m = 0;
// while(m<11)
// {
//     console.log(`${m} x ${m} = ${m*m}`)
//     m++
// }

// let w = 0;
// console.log("i i^2 i^3");
// while(w<11)
// {   
//     console.log(`${w} ${w*w} ${Math.pow(w,3)}`)
//     w++;
// }

// // Use for loop to iterate from 0 to 100 and print only even numbers

// for(let num = 0; num<=100; num++){
//     if(num % 2 == 0){
//         console.log(num);}
// }

// // Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0
// for(num = 0; num<=100; num++){
//     sum += num;
// }

// console.log("The sum of all numbers from 0 to 100 is:", sum);

// //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0
for(num = 0; num<=100; num++){
    if(num % 2 == 0){
        sumEven += num;
    }
    else if(num % 2 != 0){
        sumOdd += num;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let joined  = [sumEven,sumOdd]
console.log(joined)

//Develop a small script which generate array of 5 random numbers
let array = []
for(i=0; i < 5; i++)
{
    array.push(Math.floor(Math.random() * 100))
}
console.log(array)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let array1 = []
for(i=0; i < 5; i++)
{
    let number = Math.floor(Math.random() * 10)
    
    if (array1[i] != number)
    {
        array1.push(number)
    }
}
console.log(array1)

//Develop a small script which generate a six characters random id: 5j2khz

let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
let id = ''
for(i=0;i<6;i++){
    let randomIndex = Math.floor(Math.random() * char.length)
    id += char[randomIndex]
}
console.log(id)

