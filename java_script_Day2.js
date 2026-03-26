let x = 123;
let z = 23.0;

console.log(x.toString());
console.log(x.toExponential());
console.log(x.toFixed(2));
console.log(z.toPrecision(7));

// Arrays
const cars = ["Saab", "Volvo", "BMW"];

const car1 = [
    "Saab",
    "Volvo",
    "BMW"
];

const car2 = [];
car2[0] = "Hello";
car2[1] = "World";
car2[2] = "This";
car2[3] = "Is";
car2[4] = "Java";

const car3 = new Array("Volvo", "BMW", "Audi");

const person = [12, "John", "yui", true];


const fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();



//Object
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
console.log(car.type)
car.color = "black";
delete car["model"];

let result = ("bad" in person);

function sayhello(){
    return "Hello World";
}
let mess = sayhello();


function multiplies(a,b){
    return a * b;
}

let m = multiplies(2,3);
console.log(m);

//Arrow functions should be created in a variable to call it.
const arrow = (a,b) => a*b;

//or 
const borro = (a,b) =>{
    return a * b;
}

//Task
function fu(str)
{
    for(i = 0 ; i < str.length ; i++)
    {
        console.log(str[i]);
    }
}


let ki = (str) => {
    let result = "";
    for(let i = 0 ; i < str.length ; i++)
    {
        console.log(str[i]);
    }
    return result;
};

ki("Hello");
console.log(ki);    


//for each
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) {
    console.log(val);
});

//This callback function will calculate value at each index

let state = ["pune","Maharashtra","WB", "UP"]
state.forEach((val,index) => {
    console.log(val.toUpperCase(), index);
});

let intt = [1,2,3,4,5];
intt.forEach((intt) =>{
    console.log(intt*intt);
})


//Array Methods
//Maps
let n = [23,83,9];
n.map((val) =>{
    console.log(val);
})


//map to array direct store
let hj = n.map((val)=>{
    return val;
});
console.log("Seperate")
hj.forEach((val)=>{
    console.log(val);
})

//filter individual values filter based on condition
let jhi = [12,13,14,15,16,8];

jhi.forEach((val)=>{
    if(val % 2 == 0)
    {
        console.log(val," it is even ");
    }
})

//Reduce reduce array to single value and will return it
intt.reduce((res,curr)=>{
    return res+curr;
})


//find largest value from array
let lio= [12,13,14,15,16,8];
let bio = lio.reduce((res,curr)=>{
    return curr > res ? curr : res;
})
console.log(bio);



//Assign 1
let stud = [20,30 ,93,43,56,95,99,97];

let toop = stud.filter((val)=>{
    return val > 90;
})
console.log(toop);



/*
let input_user = prompt("Enter a size:- ");
let arrrr = [];
for(let i = 0 ; i < input_user ; i++)
{
    arrrr[i] = prompt("Enter Value At Index ["+i+"] :- ")
}
console.log(arrrr);

//sum of all

let sum = arrrr.reduce((res, curr)=>{
    return res + parseInt(curr);
}, 0);
console.log("The total value of the entered list is :- "+sum)
*/


//random data input using for loop
let jh = prompt("Enter a number :- ")
let array = [];
for(let i = 1 ; i < jh; i++)
{
    array.push(i);
}
console.log(array);


let prod = array.reduce((res,curr)=>res * curr,1);
console.log(prod);


