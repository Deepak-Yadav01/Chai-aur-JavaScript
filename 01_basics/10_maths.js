console.log(Math);
console.log(Math.PI);
console.log(Math.LOG2E);

console.log(Math.abs(-20)); // gives always positive number
console.log(Math.round(4.6)); // gives nearest integer,//5
console.log(Math.ceil(4.2));// 5 // integer  se thora bhi bara hone pe next integer value lega.
console.log(Math.floor(4.2));// 4 // integer  se thora bhi km hone pe same integer value lega.
console.log(Math.min(2,-5,6,1)); //-5
console.log(Math.random());// range (0 - 1) any random number
console.log(Math.random()*10);
console.log((Math.random()*10) + 1); // minimum value 1 ya isse jyada hi aaye km nhi aa skti
console.log(Math.floor(Math.random()*10)); // Math.floor value  gives the integer value.range (0  to 9).


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);// gives the value btw 10 to 20.// *(max - min + 1) + min
