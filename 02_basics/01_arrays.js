//Arrays

const myArray = [5, 4, -6, 2, 0, 9]

const myHeros = ["Shaktiman", "krish", "Naagraj"]

const myArray2 = new Array(1, 2, 3, 4)  //another way to decleare an array,in this method [] are not use ,but it is also an array

// console.log(myArray[0]);  // indexing starts  with 0
// console.log(myArray2); //[1, 2, 3, 4]
// console.log(myArray2[3]);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(10)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


// console.log(myArray); 

const newArr = myArray.join()
// console.log(newArr);
// console.log(typeof newArr); // string



//slice, splice

console.log("A", myArray);

const myNewArr = myArray.slice(1, 3)

console.log(myNewArr);
console.log("B", myArray);


const myNewArr2 = myArray.splice(1, 3) // splice changes the main array

console.log(myNewArr2);
console.log("C", myArray);


