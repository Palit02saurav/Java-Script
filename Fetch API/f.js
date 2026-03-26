//Fetch API provides an interface for fetching resources 
//It uses Request and Response objects
//The fetch() method is used to fetch a resource

const url = "https://official-joke-api.appspot.com/random_joke"

const factpara = document.querySelector("#facts")

/*Obersvaion:-
status 200 :- Successfull request  */

const getfacts = async () =>{
    console.log("Getting data")

    let response = await fetch(url)

    console.log(response)
    let data = await response.json();
    console.log(data);
    console.log(data.setup)
    console.log(data.punchline) //here punchline is js object property
    factpara.innerText = data.punchline //to print random fact on html document (but if i write something on the para it will be overrided with the data that api will be presenting on it)
}

console.log(getfacts())


/* Few Term's To Understand
AJAX :- Asynchronous JavaScript and XML
JSON :- JavaScript Object Notation

json() :- It is a method of the Response object that parses the response body as JSON and returns a promise that resolves with the result.(input json() output :- js object)
*/

//previously when we seek data request the request was on xml file (the data format) but now mostly on JSON

let gt = document.querySelector("#btn")
gt.addEventListener('click',getfacts)

//there is another way to do that 
function getfa(){
    fetwch(url) //return response
    .then(response => response.json()) //response was in another form so we "parse"(convert) it
    .then(data => { //final data return
        console.log(data)
        factpara.innerText = data.punchline
    })
}

function getfa(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        factpara.innerText = data.punchline;
    });
}

//HTTP status response code

