console.log("Now im studying DOM Java Script");
//accessing by id name
let heading=document.getElementById("heading");
console.dir(heading);
//accessing by class name
let newclass=document.getElementsByClassName("newclass");
console.dir(newclass)
//accessing by tag name
let text=document.getElementsByTagName("text");
console.dir(text);
//query selector
let firstElement=document.querySelector(".newclass");
console.dir(firstElement);
// query selector using all
let allElements=document.querySelectorAll("p");
console.dir(allElements);
