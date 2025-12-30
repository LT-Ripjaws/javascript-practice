// Promise is an object that manages asynchronous operations.
// Promises to return a value.
// instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// The promise callback function has two parameters which are the resolve and reject functions.

// new Promise((resolve, reject) => {asynchronous code})

// 1. Walk the dog
// 2. Clean the Kitchen
// 3. Take out the Trash

// example with callbacks

function walkDog(callback){

  setTimeout(() => {console.log("You walk the dog");
    callback();
  }, 1500);
}

function cleanKitchen(callback){

  setTimeout(() => {
    console.log("You clean the kitchen");
    callback();
  }, 2500);
}

function takeOutTrash(callback){
  setTimeout(() => {
    console.log("You take out the trash");
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("You finished all chores")
    })})
})

// Now lets use promises.

function walkDog2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if(dogwalked){
      resolve("You walk the dog");
      }
      else{
      reject("You didnt walk the dog!")
      }
  }, 1500);
  })
}

function cleanKitchen2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const cleaned = true;
    if(cleaned){
      resolve("You clean the kitchen");
    }
    else{
      reject("you did not clean the kitchen")
    }
  }, 2500);
  })
}

function takeOutTrash2(){
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const trashed = false;
      if(trashed){
        resolve("You take out the trash");
      }
      else{
        reject("you didnt take out the trash")
      }
  }, 500);
  })
}

// now we do method chaining.
// value will show the code in resolve whereas catch will show us the reject.

walkDog2().then(value => {
  console.log(value);
  return cleanKitchen2()
}).then(value => {
  console.log(value);
  return takeOutTrash2()}).then(value => { console.log(value); 
    console.log("You finished all the chores")}).catch(error => console.log(error));

// fetch also works with this.
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens






  // Async - Makes a function return a promise
  // Await - Makes an async function wait for a promise

  // This allows us to write asynchronous code in a syncrhonous manner.
  // Async doesnt have resolve or reject parameters
  // Everything after Await is placed in an event queue

  // Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

  async function doChores(){
    try{
    const walkDogResult = await walkDog2();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen2();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash2();
    console.log(takeOutTrashResult);

    console.log("Yayyydone")
    }
    catch(error){
      console.log(error)
    }
    
  }

  doChores();


const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()

// since an async function returns promise, we can also create those walkDog2 functions with async function walkDog2(){}
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// async function walkDog2() {
//     await delay(1500);

//     const dogwalked = true;

//     if (dogwalked) {
//         return "You walk the dog";
//     } else {
//         throw new Error("You didnt walk the dog!");
//     }
// }

// try {
//     const result = await walkDog2();
//     console.log(result);
// } catch (err) {
//     console.error(err.message);
// }




// some basic use cases:
async function getUser(userId) {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const user = await response.json();
    return user;
}

(async () => {
    try {
        const user = await getUser(1);
        console.log(user);
    } catch (err) {
        console.error(err);
    }
})();

async function processSequential() {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const payments = await getPayments(orders);
}

// Each await waits for the previous one.