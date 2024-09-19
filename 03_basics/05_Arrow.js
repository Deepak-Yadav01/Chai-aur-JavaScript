// arrow fnction can be decleared as let/const/var = () => {    }

const myArrowFun = () => {
      let username = "Radha"
    //   console.log(this.username);   // undefined
    // console.log(this);// {}
    console.log(username); 
}
myArrowFun()
// console.log(username);


//explict return

// const addTwo = (num1, num2) => {      // Note: curely brases  {} me return keyword likhna hi prta h
//     return num1 + num2
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// imlpicit return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => num1 + num2   // jbki paranthesis  me wraped code ko return keyword nhi likhte h.
// const addTwo = (num1, num2) => {username:"Deepak"} // undefined
const addTwo = (num1, num2) => ({username:"Deepak"}); //{ username: 'Deepak' }
console.log(addTwo(5, 6));

 
// myArray = [2, 5, 9, 3, 8]

// myArray.forEach(); // discuss latter