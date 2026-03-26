//DOM Attributes and styles :- getAttribute and setAttribute {style :- node.style)}

let div = document.querySelector("div");
console.log(div)

let id = div.getAttribute("id");
console.log(id)  // id value is box whis we wrote is box

let name = div.getAttribute("name");
console.log(name)  // name value is jsdiv which we wrote is jsdiv

let atr = document.querySelector("p");
console.log(atr.getAttribute("class"))
console.log(atr.setAttribute("class","newClass")) //changing name of class from para to new class

//style
let divi = document.querySelector("div")
console.log(divi)
console.log(div.style) //to print the inline(directly in tag) style

divi.style.backgroundColor = "blue"

//console.log shows HTML view
//console.dir shows JS object view 

//Insert and delete elemenst using nodes
/* 
node.append() adds at the end of the list 
node.prepend() adds at the start of the node
node.before() adds before the node
node.after() adds afte rthe node
*/

let btn = document.createElement("button");
console.log(btn)
btn.innerText = "Click me";
console.log(btn)

//to show it on screen 
//access it first
let divf = document.querySelector("div");
divf.append(btn) //to add at the end of the div
divf.prepend(btn) //to add at the start of the div
divf.before(btn) //to add before the div
divf.after(btn) //to add after the div


//different position with tags
let nh = document.createElement("h1"); //new heading created
nh.innerHTML = "<i>Heading</i>" //added some text

document.querySelector("body").append(nh) //fetched the body first then added it to the end of the body

let po = document.querySelector("p");
po.remove() //remove the paragraph from the page


















