let age = 24;
let name = 'Saurav';
let isStudent = true;

let a = 10;
let b = 12;

console.log("Thats it");
console.log(typeof(age));

const student = {
    namer: 'Saurav',
    gamer: 'bolt',
    win: 3
};

console.log(typeof(student));

console.log(student.namer);
console.log(student["namer"]);

let ai = 10;
let bi = 10;

if (ai > bi) {
    console.log(`${ai} is eligible to vote`);
}
else if(ai == bi)
{
    console.log("Both are same");
}
else {
    console.log(`${bi} is eligible to vote`);
}



let texter = (age > 18)? "Minor" : "Adult";

switcha = 19;

switch(switcha){
    case 18:
        console.log("Switcha a is 18");
        break;
    case 19:
        console.log("Switcha a is 19");
        break;
    default:
        console.log("Switcha a is not 18 or 19");

}

let d = new Date();
console.log(d)
console.log(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());



tech = null;
tusk = "missing";
let result = tech ?? tusk;
console.log(result);


let cars = ["BMW","Mercedes","Audi","Tesla"];
let dext = "";
for(let i = 0 ; i < cars.length ; i++){
    dext+=cars[i]+"<br>";
}
console.log(dext)
document.write(dext); //it will make the compiler to write on page instead of console.

let str123 = "Hello World"
let str321 = "its Java Script"

//length 
console.log(str123.length);

//charAt
console.log(str123.charAt(2));

// charCodeAt()
console.log("charCodeAt(1):", str123.charCodeAt(1));

// codePointAt()
console.log("codePointAt(1):", str123.codePointAt(1));

// concat()
console.log("concat:", str123.concat(str321));

// at()
console.log("at(2):", str123.at(2));

// []
console.log("Using []:", str123[3]);

// slice()
console.log("slice(2,7):", str123.slice(2,7));

// substring()
console.log("substring(2,7):", str123.substring(2,7));

// substr()
console.log("substr(2,5):", str123.substr(2,5));

// toUpperCase()
console.log("toUpperCase:", str123.toUpperCase());

// toLowerCase()
console.log("toLowerCase:", str123.toLowerCase());

// isWellFormed()
console.log("isWellFormed:", str123.isWellFormed());

// toWellFormed()
console.log("toWellFormed:", str123.toWellFormed());

// trim()
console.log("trim:", str123.trim());

// trimStart()
console.log("trimStart:", str123.trimStart());

// trimEnd()
console.log("trimEnd:", str123.trimEnd());

// padStart()
console.log("padStart:", str123.trim().padStart(20, "*"));

// padEnd()
console.log("padEnd:", str123.trim().padEnd(20, "*"));

// repeat()
console.log("repeat:", str123.trim().repeat(3));

// replace()
console.log("replace:", str123.replace("World", "JavaScript"));

// replaceAll()
let text = "cat dog cat dog";
console.log("replaceAll:", text.replaceAll("cat", "lion"));

// split()
let sentence = "JavaScript is powerful";
console.log("split:", sentence.split(" "));




let neww = "Hello World java script its crap";

console.log(str123.indexOf("java"));

console.log(str123.lastIndexOf("its"))

console.log(str123.search("java"))

console.log(str123.match("java"))

// includes()
console.log("includes('World'):", str.includes("World"));

// startsWith()
console.log("startsWith('Hello'):", str.startsWith("Hello"));

// endsWith()
console.log("endsWith('World'):", str.endsWith("World"));