// Create an empty object called dog
const dog = {}
console.log(typeof(dog))

// Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof
dog.name = "Jonathon"
dog.legs = 4
dog.color = "white"
dog.age = 5
dog.bark = function(){
    return "woofwoof"
}

console.log(dog)

console.log(`The dog's name is ${dog.name}, 
it has ${dog.legs} legs and it is ${dog.color} color. ${dog.name} is ${dog.age} years old.
he says ${dog.bark()}`)

// -----------------------

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Find the person who has many skills in the users object.
let mostSkilledPerson = '';
let maxSkills = 0;

for(const [key, value] of Object.entries(users))
{
    if(value.skills.length > maxSkills) {
        maxSkills = value.skills.length
        mostSkilledPerson = key;
    }
}

console.log(`Most skilled person: ${mostSkilledPerson} (${maxSkills} skills)`);

// Count logged in users, count users having greater than equal to 50 points from the following object.

let count = 0;
let points = 0;
for(values of Object.values(users))
{
    if(values.isLoggedIn == true){
        count++
    }
    if(values.points >= 50)
    {
        points++
    }
}
console.log("Logged in users:",count)
console.log("Users greater than 50 points:",points)


//-------------------------

 const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];


// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application


function idGenerate(){
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for(i=0;i<6;i++){
    let randomIndex = Math.floor(Math.random() * char.length)
    id += char[randomIndex]
    }
return id
}

function generateTime(){
   const now = new Date()
   const formatted = now.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
})
    const clean = formatted.replace(',', '');
    return clean
}


let username = 'Chini'
let email = 'Chini@chini.com'
let password = 'default'



function signUp(username, email, password){
    users1.push({
        _id : idGenerate(),
        username: username,
        email: email,
        password: password,
        createdAt: generateTime(),
        isLoggedIn: false
    })
}

signUp(username,email,password)

for(const values of users1)
{
    console.log(values)
}

function signIn(){
    inputUsername = prompt("Enter your username").toLowerCase()
    inputPassword = prompt("Enter your password")

    // users1.forEach(user => 
    // {
    //     if(inputUsername.trim() == user.username.toLowerCase() && inputPassword.trim() == user.password)
    //     {
    //         alert("Congrats you are logged in!")
    //         user.isLoggedIn = true
    //         console.log(user)
    //         return user._id
    //     }
    // }

    const user = users1.find(u => 
        u.username.toLowerCase() === inputUsername && u.password === inputPassword
    );

    if (user) {
        alert("Congrats you are logged in!");
        user.isLoggedIn = true;
        console.log(user);
        return user._id;
    } else {
        alert("Invalid username or password.");
        return null;
    }
    // forloop normal
    // for (const user of users1) {
    //     if (user.username.toLowerCase() === inputUsername && user.password === inputPassword) {
    //         alert("Congrats you are logged in!");
    //         user.isLoggedIn = true;
    //         console.log(user);
    //         return user._id; 
    //     }
    // }

    // alert("Invalid username or password.");
    // return null;
}

userId = signIn()

for(const values of users1)
{
    console.log(values)
}

// ------------

 const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 

rateProduct(userId)

function rateProduct(userId){
    rating = parseFloat(prompt("Enter rate: "))
    let productId = prompt("Enter product ID: ")
    if(isNaN(rating)){
        alert("incorrect rating")
        return null
    }
    else{
        products.forEach(product => {
            if(productId == product._id){
                product.ratings.push({userId: userId, rate: rating})
            }
    })
    }
   
}

for(const values of products)
{
    console.log(values)
}
