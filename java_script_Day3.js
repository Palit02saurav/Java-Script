//3 Muskeeters of Web HTML , CSS JS
//DOM stands for DOCUMENT OBJECT MODEL
//DOM :- when a  webpage loaded teh web page creates a DOM of the page (in short we can access all the tags and data of HTML through DOM)

//Window Object :- it represnts an open window  in a browser (ts a browsers obejct) that displays a web page. It is the global objects in Java script and provides methods and properties to interact with browser window.It's a global obecjt with lot of properties and methods

window.console.log("Hello World")
//window.document();//to see the whoel html doc
console.dir(window.document)
console.log(document.body)
console.dir(document.body)

document.body.style.backgroundColor = "blue"; //dynamic changes on page

document.body.childNodes[3].innterText = "abcd"; //it will change the header to abcd

//DOM Manipulation
console.log("Fresh Body")
console.log(document.body); //if i give script before body the DOM can't access the data

//DOM Types :- Seletcing with ID , Selecting With Class ,Selecting With Tag , Query Selector


//if no such tag , clas or id isn't in the list it will print nothing if i(id : Null , class : nothing will print {length : 0} )
//to fetch header of the same id
let heading = document.getElementById("head");
console.log(heading)

let doclass = document.getElementsByClassName("buff");
console.log(doclass);

let doctag = document.getElementsByTagName("p")
console.log(doctag);

console.log("Query Selector")
let ele1 = document.querySelector("p") //can fetch any element tag , id , class , para any but only first element 
console.log(ele1)
let ele2 = document.querySelectorAll("h4"); // it will fetch all the h4 tags in the form of node list
console.log(ele2)

let ele3 = document.querySelectorAll(".hey")
console.log(ele3)
//but in id only single selector is logical (ex :- #head)


//DOM Properties Manipulation :- tagName ,innerText , innerHTML , textContent
console.log(ele1.tagName); //it will give the tag name of the element

//body is the parent tag and teh tags which will be implemented belwo it are its children tag

console.dir(document.body.firstChild); //first child in body tag


//to access our elements
let disg = document.querySelector("div");
console.dir(disg);
console.log(disg.innerText) // it will print the inner text
console.log(disg.innerHTML); //it will print the string but in html plain html format means with tags li , ul
console.log(disg.textContent); //it will print the inner text but in plain text format means without tags and even is visibility is hidden

disg.innerText = "This is new text"; //it will change the inner text of the div tag

//dynamic data changing