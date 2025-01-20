// 1# Primitive datatype(7)

//7 types : String, Number, Boolean, BigInt, Null, Undefined, Symbol.

let myString = "myName"

const score = 123
const scoreValue = 123.56

const isLoggedIn = false

const bigNumber = 1234567854612n
console.log(typeof(bigNumber));


const outSideTemp = null

let userEmail;

const id = Symbol(456);
const anotherId = Symbol(456)

console.log(id === anotherId);


const s1 = Symbol.for("key");
const s2 = Symbol.for("key");

console.log(s1 === s2); // true

// 2# Reference (Non-primitive) datatype.

// Array, Objects, Functons.
const heros = ["shaktimaan", "krish","naagraj"]


let myObj={
            Name: "DEEPAk",
            age: 22,
        }

 const myFunction = function() {
    console.log("Hell world !");
    
}    
myFunction()    