// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 <= 1);
// console.log(2 != 1);

console.log( "2" > 1);  // comparison opertor convert data into number and then compare
console.log( "02" > 1);

console.log( null > 0); // false
console.log( null == 0); // false
console.log( null >= 0); //true

//the reason is that an equality check == and comparison < > <= >= works differently.
//comparison convert null to a number,and treating it as 0. that's why null >=0 is true, and null >0 is false.


console.log( undefined > 0); // false
console.log( undefined == 0); // false
console.log( undefined >= 0); // false 


// STRICT CHECK (===)

console.log("2" === 2); // it also checks datatype along with comparison
