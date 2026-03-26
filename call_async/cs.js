//Synchronus :- it means teh code runs particularly on the order's or instruction's given in the code.

//Asynchronus :- due to synchronus programming sometimes important instructions get blocked due to oe previous instructions , which causes delay to UI , Asynchrnus code execution allows to execute netx instructions immediate and doesn't block the flow 

//Synchronus (cause in case of API)
console.log("One")
console.log("Two")
console.log("Three")

//Asynchronus(not in order but  )
function hello(){
    console.log("Hello")
}

setTimeout(()=>{
    console.log("Hello From Set Timeout")
}, 4000);

console.log("four")
console.log("five")

//observation :- java will not wait for the Hello to print it will imeediately print the rest of the outputs after a while the Hello will print.


//Callbacks  : is a function passed as an argument to nother function
function sum(a,b)
{
    return a+b;
}
function calculator(a,b ,sum){
    setTimeout( () =>{
        console.log(sum(a,b));
    }, 3000);
}
calculator(1,2,sum);

//Call back Hell :- Nested call backs stacked below another forming structure or another forming a period structure 

//nesting :-making 1 under another it can be method , or function or class etc.

//call bck hell happens due to nested class
