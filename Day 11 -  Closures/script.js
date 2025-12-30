// JS allows us to write a function inside another function. If the inner function can access the
// variables of the outer function then it is called a closure.
// its mainly used for data privacy and encapsulation

// Data Encapsulation and Private Variables: Closures allow you to create private variables that cannot be accessed or modified directly from the outside. 
// The only way to interact with them is through the public methods defined within the inner function, which helps prevent unwanted interference or data leakage.

function outer(){

  let message = "hello"

  function inner(){
    console.log(message)
  }

  inner();
}
outer();




function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())




function createCounter(){
  let count = 0;

  function increment(){
    count++;
    console.log(`Count increased to ${count}`)
  }
  
  return {
    increment
  };
}

const counter = createCounter();

counter.increment();

// its like a class