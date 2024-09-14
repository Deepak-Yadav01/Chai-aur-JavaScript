//  1.CONVERSION INTO NUMBER

let score = "33abcd"

console.log(typeof score); 
// or
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); // Nan
console.log(typeof NaN); // number


let score1 = null;
let nullValue = Number(score1);
console.log(typeof nullValue);
console.log(nullValue);



// 2. CONVERSION INTO BOOLEAN
let isLoggedIN = "DEEPAK"

let booleanIsLoggedIn = Boolean(isLoggedIN)
console.log(booleanIsLoggedIn);


let isLoggedIN1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIN1)
console.log(booleanIsLoggedIn1);


let isLoggedIN2 = 1                 // 0 => FALSE ,1=> TRUE ,EMPTY String=> false, string=> true.

let booleanIsLoggedIn2 = Boolean(isLoggedIN2)
console.log(booleanIsLoggedIn2);


//CONVERSION INTO STRINGS

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
