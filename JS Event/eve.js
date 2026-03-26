//events in js
//the change in the state of an object is  known as event

//events are fired to notify the occurrence of an action (mouse venet , form sub ,pressing key on keyboard , print event)

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button with ID btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a);
// }

let box = document.querySelector("#div");
box.onmouseover= () =>{
    console.log("I see you boy");
};


//Event Object
//It has the details about the event , ll event handlers have the access of even object properties and methods.

let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e)
    console.log(e.type);
    console.log(e.target);
}
/*few properties "target" means where the event is occured 
"type" of event is click
"Client X and Client Y" at what postion on screen it occured */


//Event Listeneners
//So for 1 event we can create multiple event listeners


let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() =>{
    console.log("Button 2 was clicked 0")
})

btn2.addEventListener("click",() =>{
    console.log("Button 2 was clicked 1")
})

btn2.addEventListener("click",() =>{
    console.log("Button 2 was clicked 2")
})

btn2.addEventListener("click",() =>{
    console.log("Button 2 was clicked 3")
})

//Function to remove it 
const handler3  =   () =>{
    console.log("button2 was clicked by handler 3");
}
btn2.addEventListener("click",handler3)
//now i can track the button event
btn2.removeEventListener("click",handler3)




//Task button to change mode's

// let mode = document.querySelector("#modes");
// let currentmode = "light";

// mode.addEventListener("click",() =>{
//     if(currentmode === "light"){
//         currentmode = "dark";
//         console.log("Current mode is ",currentmode)
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currentmode = "light";
//         console.log("Current mode is ",currentmode)
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// })

//going to do this within style.css



let mode = document.querySelector("#modes");
let currentmode = "light";

mode.addEventListener("click",() =>{
    if(currentmode === "light"){
        currentmode = "dark";
        console.log("Current mode is ",currentmode)
        document.querySelector("body").classList.add("dark")
    }else{
        currentmode = "light";
        console.log("Current mode is ",currentmode)
        document.querySelector("body").classList.add("light")
    }
})