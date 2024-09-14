const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.78956
console.log(otherNumber.toPrecision(2));

const anyNumber = 23.78956
console.log(anyNumber.toPrecision(9));

const num = 1234.5
console.log(num.toPrecision(1));//1e+3
console.log(num.toPrecision(2));//1.2e+3
console.log(num.toPrecision(7));//1234.500

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //10,000,000

