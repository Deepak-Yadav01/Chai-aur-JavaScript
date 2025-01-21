const name = "Deepak yadav";
const repoCount = 20;

console.log(name  + repoCount + " Github");

//another way to concatinate by using `` (backticks). it is also called string entropolation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //or
console.log(`${name} ${repoCount}`);


//another way to declare a strings.
const gameName = new String('deepak Dy com')

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("D"));
console.log(gameName.includes('d'));
console.log(gameName.repeat(3));


let newString = 'priyankayadav';
console.log(newString.substring(0,4));//last index value include nhi hogi

const newString1 = gameName.substring(0,4)
console.log(newString1);

const anotherString = gameName.slice(-9,-3)
console.log(anotherString);


const newStringOne = "   deepak      "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://dy.com/deepak%20yadav"

console.log(url.replace('%20',"-"));

console.log(url.includes("dy"));
console.log(url.includes("mahi"));

console.log(gameName.split(' '));
console.log(url.split(''));
console.log(url.split('/'));
console.log(url.split('',10)); // seperator and limit for split
