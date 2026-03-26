//Prototypes in JS , a javascript object is an entity state having state and behaviour.
//JS objects have a special property called prototype.

const student = {
    fullname : "Saurav",
    marks : 90,
    printMarks: function(){
        console.log("marks = ",this.marks);
    },
};

const teacher ={
    fullnames: "Gaurav",
    department: "Computer Science", 
    printDepartment: function(){
        console.log("Teacher Name = ",this.fullnames);
        console.log("Teacher department = ",this.department);
    }
}

Object.setPrototypeOf(teacher, student); //it is used to set the prototype of an object. It allows you to establish a prototype chain between two objects, enabling inheritance of properties and methods from one object to another.   

//If object and proto have same method object data will be defined



//Classes in JS is a program code  template for creating object.

class ToyotaCar{
    constructor(){
        console.log("Constructor")
    }
    start(){
        console.log("Satrt")
    };

    stop(){
        console.log("Stop")
    }

    newcar(cart){
        this.cart = cart;
    }
}

let fortuner = new ToyotaCar(); //creating an object of class ToyotaCar;
fortuner.newcar("Kharid");


//Contructor

class Hello{
    constructor(name){
        this.name = name;
        console.log(name);
    }
    pullo(){
        console.log("Pull it ", this.name);
    }
}

let access = new Hello("Saurav");


//Inheritance
class Parent{
    father(){
        console.log("Father");
    }
    mother(mom){
        this.mom = mom;
        console.log("Mother is :- ",mom) 
    }
}


class Child extends Parent{
    kid(){
        console.log("I am a baby")
    }
}


let par = new Parent();//won't work if 2 function and one have parameter
par.mother("Mamum");


let childish = new Child();
childish.mother("Mam")


//super keyword
class Schoool{
    constructor(name){
        this.name = name;
    }
    greet()
    {
        console.log("Greet")
    }
}

class College extends Schoool{
    constructor(name,age){
        super(name);
        this.age = age;
    }

    show(){
        console.log("Name:",this.name)
        console.log("Age:",this.age)
    }

    greet()
    {
        super.greet()
        console.log("Welcome for College")
    }
}

let obj = new College("Sourav",22);
obj.show();
obj.greet();



//Use of super keyword
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(this.name+" makes a lot of noise")
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    speak()
    {
        super.speak();
        console.log(this.name+" barks")
    }
}

let d = new Dog("Tommy","Husky");
d.speak()