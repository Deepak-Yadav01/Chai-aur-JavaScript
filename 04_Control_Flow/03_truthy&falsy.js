// const userEmail = "dy@01gmail.com"
// const userEmail = ""  // "" and  " " are two different  things, "" is a empty string,length:0, while " " is a string with space,length:1.
const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

// falsy value
// false,  0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty"); 
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}