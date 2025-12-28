// A Class is a blueprint for creating object. We instantiate a class to create an object.
// The class defines attributes and the behaviour of the object.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product Name: ${this.name}\nProduct Price: $${this.price}`)
    }
}

const product1 =  new Product("Shirt", 19.99)
product1.displayProduct()

console.log(product1) // it is an object
console.log(product1.name) // See we can get the name value like this


// Getter methods: The get metthod allows us to access value from the object.
// We can write a get method using keyword 'get' followed by a function. 

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get getFullName(){ // use get keyword
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

const person1 = new Person("Name A", "Name B")
console.log(person1.getFullName) // You dont use () parenthesis with getters


// Setter Methods: the setter method allows us to modify the value of certain properties.
// We write a setter method using keyword 'set' followed by a function.

class Animal{
    constructor(type, color){
        this.type = type;
        this.color = color;
    }

    get getInfo(){
        const info = `Animal Type: ${this.type}\nAnimal Color: ${this.color}`;
        return info;
    }

    set setType(type){
        this.type = type;
    }

    set setColor(color){
        this.color = color;
    }
}

const animal1 = new Animal()
animal1.setColor="blue" // this is how you set using the setter methods.
animal1.setType="bird"
console.log(animal1.getInfo)



class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // the line this.width = width; calls this setter
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    get width(){
        return this._width;
    }
}

const rectangle = new Rectangle(111, 12)
console.log(rectangle.width);

// Static Keyword: keyword that defines properties or methods that belong to the class itself
// Rather than the objects created from that class. Class owns anything static not the objects.

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2
    }
}
console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(5))

class User{
    static userCount = 0;
    count = 0;
    constructor(username){
        this.username = username;
        User.userCount++; // use the class name to access the static value
        this.count++ 
    }
}

const user1 = new User("razor")
console.log(User.userCount)
const user2 = new User("jokEr")
console.log(User.userCount) // changes for whole class.
console.log(user2.count) // see this is only 1. This changes only for the user.


// Inheritance: Allows a new class to inherit properties and methods from an existing class

class Animalz{
    alive = true;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animalz{
    name = "rabbit";

    constructor(name, age, runSpeed){
        super(name, age); // must use a super method here if we use constructors in the classes derived.
        this.runSpeed = runSpeed;
    }

    tired(){
        console.log(`This ${this.name} is so tired`)
        super.sleep(this.name) // can also use the super keyword to access the parent's methods
    }
}

class Fish extends Animalz{
    name = "fish";

    constructor(name, age, swimSpeed){
        super(name, age); // we are sending these info to the parent to be used.
        this.swimSpeed = swimSpeed;
    }

    tired(){
        console.log(`This ${this.name} is so tired`)
        super.sleep(this.name)
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish =  new Fish("fish", 2, 12);

console.log(rabbit.alive) // Yay its alive! we can access the parent class
rabbit.eat()
rabbit.sleep()
fish.eat()
rabbit.tired()

// Overriding:
// As you can see, we manage to access all the methods in the Animalz and we used it in the child class. 
// We can customize the parent methods, we can add additional properties to a child class. 
// If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. 
// Inside the constructor function we call the super() function to access all the properties from the parent class. 
// If the same method name used in the child class, the parent method will be overridden.

