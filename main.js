body = document.querySelector("body");
let header = document.querySelector("header");

//creating elements in DOM through js":
let el = document.createElement("div");
el.classList.add("cookie");
el.textContent = "This is a test class"; //to add text inside element
el.innerHTML = "This is a test class added by innerHtml <button>OK</button> "; //to add Html elements
//through js
header.append(el); //last child of selected element
header.prepend(el); //first child of selected element

header.before(el); //before header as a sibling
header.after(el); //before header as a sibling
header.after(el.cloneNode(true)); //cloning node to use in both places,true means all child elements.
// button.addEventListener("click", () => {
//   el.remove();
// });

//styles:
el.style.background = "#ff585f";
el.style.width = "120%";
console.log(getComputedStyle(el).background); //to see the current background in console
// message.style.height = number.parseFloat(getComputedStyle(message).height, 10);
(40, "px"); //changing height alternate method
document.documentElement.style.setProperty("--color-primary", "black"); //way to directly change any property from css.

//attributes:
let atri = document.querySelector(".image");
console.log(atri.src);
console.log(atri.getAttribute("src")); //another way of getting.
atri.setAttribute("designer", "Moin"); //can also set attribute.
//cant get attribute which isnt valid:
console.log(atri.designer);

//data-attributes:
console.log(atri.dataset.versionNumber);

//classes:
atri.classList.add("c", "d"); //can add multiple classes
atri.classList.remove("c");
atri.classList.toggle("c");
atri.classList.contains("c");

//dont use:
atri.className = "c"; //it removes all existing classes

//event proagation

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
};

console.log(randomColor(0, 255));
const box = document.querySelector(".box-child");
box.addEventListener("click", function (e) {
  //   box.style.backgroundColor = randomColor();
  box.style.backgroundColor = randomColor();
  //   e.stopPropagation(); to stop propogation
});

document.querySelector(".box-p2").addEventListener(
  "click",
  function () {
    this.style.backgroundColor = randomColor();
  },
  true, //to do event propagation from capturing insted of bubbling.
);

// let nav = document.querySelectorAll(".nav-link");
// nav.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     const id = el.getAttribute("href");
//     e.preventDefault();
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     console.log(id);
//   });
// });

//scrollintoview function can be used to make the smooth scroll.

//better way to do the same thing using event deligation
//using parent elements to target child elements inside dom.
//add event listener to a common parent of all the links.
//determine what element orignated the event.
document.querySelector(".nav_links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    console.log(id);
  }
});

//DOM travarsing : getting elements through relitive elements of a specific element.
let boxParent = document.querySelector(".box-p1");
//going downwards:child
console.log(boxParent);
console.log(boxParent.querySelectorAll(".box")); //basically finds all the elements inside the parent
//element relevent to this class.
console.log(boxParent.childNodes);
console.log(boxParent.children); //to get the direct children of element.
boxParent.firstElementChild.style.color = "red";
boxParent.lastElementChild.style.color = "orangered";

//going upwards:parent:
let child = document.querySelector(".box-child");
console.log(child.parentNode);
console.log(child.parentElement);
//gets the closest parent element specific to the class mentioned.
console.log(child.closest(".box-p1"));

//going sideways : siblings.
console.log(child.nextElementSibling);
console.log(child.previousElementSibling);
// to get all the children
console.log(child.parentElement.children);
//use case:
let children = [...child.parentElement.children];
children.forEach(function (el) {
  if (el !== child) {
    el.style.backgroundColor = "orangered";
  }
});

//it can be used specify the event you want to in addEventListener where,.
// guard clause
// if (!clicked) return
