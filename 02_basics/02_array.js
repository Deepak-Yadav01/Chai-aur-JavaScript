const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);//flash

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);  // combine two or more array

 // concat and spread methods works same. 

const allNewHeros = [...marvel_heros, ...dc_heros] // ... is a spread method
console.log(allNewHeros);


const complexArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]

const realComplexArray = complexArray.flat(Infinity) //in this we can use, .flat(1) /.flat(2) or etc.
console.log(realComplexArray);


console.log(Array.isArray("Deepak")); // .isArray is used for asking questions
console.log(Array.from("Deepak"));  //create an array  from an iterable object.
console.log(Array.from({name: "Deepak"})); //here name is key of this object ,so .from is unable to convert it into an array, hence it retuns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
