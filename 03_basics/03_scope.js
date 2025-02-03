

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



// nested scope

function one(params) {
    username = "Deepak"

    function two(params) {
        const website = "youtube" 
        console.log(username);
        
    }
    // console.log(website); //  website is under the scope of the function two
    
    two()
} 

one() 



if (true) {
    const myname = "DeepakYadav"
    if (myname === "DeepakYadav") {
        const website = " google.com"
        console.log(myname + website);
    }
    // console.log(website); // it give error
}
// console.log(myname); // it give error


// +++++++++++++++++++++++++++ ineresting Hoisting ++++++++++++++++++++++++++++++

console.log(addone(5)); 
function addone(num) { // it is called function
    return num + 1
}
// console.log(addone(5));

// console.log(addtwo(5)); //it give error because of const addtwo  method
const addtwo = function(num) { // it is also called function expression
    return num + 2
}
// console.log(addtwo(5));

