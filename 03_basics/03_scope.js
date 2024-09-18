

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c); // var variable print it 30


// var c = 400  ,phir bhi 30 hi print krega
let a = 600
if (true) {
    let a = 10
    const b = 20
    // var c = 30 // block scope ke andr ke variable bahar nhi hone chahiye
    console.log("INNER:", a);
    
}

console.log(a);
// console.log(b);
// console.log(c); // var variable print it 30
