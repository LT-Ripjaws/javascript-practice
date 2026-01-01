// HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. 
// It is possible to get, create, append or remove HTML elements using JavaScript.

// There are some element selectors that help to target and manipulate HTML elements.

// 1. document.getElementById() - ELEMENT OR NULL
// 2. document.getElementsClassName() - HTML COLLECTION
// 3. document.getElementsByTagName() - HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST

const myfood = document.getElementById("my-food")
myfood.style.backgroundColor = "yellow";
myfood.style.textAlign = "center";

// querySelector will return the first match.
// can select an HTML or HTML elements by tag name, by id or by class name.
// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title

const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow"; // the first match aka the apple is targeted. querySelector targets a single element.

// querySelectorAll  can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.
const fruits = document.querySelectorAll(".fruits");
fruits[1].style.backgroundColor = "orange"




// ADDING ATTRIBUTES:

// const titles = document.querySelectorAll('h1');
// titles[4].className = 'title'
// titles[4].id = 'forth-title'

// we can also use the setAttribute() method to set any html attribute.
const titles = document.querySelectorAll('h1')
titles[4].setAttribute('class', 'title')
titles[4].setAttribute('id', 'fourth-title')

// The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.
titles[4].classList.add('title', 'header-title') // appends class, doesnt override

console.log(titles[4])

// An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or *innerHTML.
titles[4].textContent = 'Fourth Title'

// ADDING STYLES:
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})






// DOM NAVIGATION:
// the process of navigating through the structure of an HTML document through JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---- first element child -----
const elmnt = document.getElementById('vegetables');
const firstChild = elmnt.firstElementChild;
firstChild.style.backgroundColor = 'red';

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const firstChildo = ulElement.firstElementChild;
  firstChildo.style.backgroundColor = "red";
});

// similarly, lastElementChild will target the last elements instead of the first ones.

// nextElementSibling targets the next sibling element.
// const element  = document.getElementById("apple");
// const nextSibling = element.nextElementSibling; // orange

// similarly, the previousElementSibling will target the previous element so if we
// target vegetables, we'll get fruitz

// parentElement targets the element's parent. Its simple

// children will just select all of the children of a selected element.

// ------------------




// ADD & CHANGE HTML:

// STEP 1: CREATE THE ELEMENT:
const newH1 = document.createElement("h1");

// STEP 2: ADD ATTRIBUTES/PROPERTIES:
newH1.textContent = "I Like pizzzzza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3: APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1)



// EVENT LISTENERS:
// Listen for specific events to create interactive web pages. 
// events such as click, mouseover, mouseout.
// .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", changeColor)

function changeColor(e){ //e or event is an object thats provided by the web browser when an event occurs.
  e.target.style.backgroundColor = "tomato";
  e.target.textContent = "OUCH!";
}

// There are more events such as keydown and keyup

// we can even hide stuffs with a element.style.display = "none"
// more on event listeners: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/23_Day_Event_listeners/23_day_event_listeners.md

// CLASSLIST:
// with classList, you can interact with an element's list of classes. 
// methods are like add(), remove(), toggle() remove if presennt, add if not, replace(oldclass, new class), contains().

