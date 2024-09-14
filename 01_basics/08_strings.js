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

let newString = 'priyankayadav';
console.log(newString.substring(0,4));

const newString1 = gameName.substring(0,4)
console.log(newString1);

const anotherString = gameName.slice(-9,-3)
console.log(anotherString);


const newStringOne = "   deepak      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dy.com/deepak%20yadav"

console.log(url.replace('%20',"-"));

console.log(url.includes("dy"));
console.log(url.includes("mahi"));

console.log(gameName.split(' '));

