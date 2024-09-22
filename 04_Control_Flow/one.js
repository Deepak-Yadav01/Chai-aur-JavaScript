// if

// if (true) {
//     console.log(`hello dear user`); 
// }

const isUserLoggedIn = true
const temperature = 41

// if (temperature <= 40) {
//     console.log('less than 50');
    
// }
// else{
//     console.log("greater than 50 ");
    
// }
// console.log("always executed code");

// comparision operator
// <, >, ==, <=, >=, !=, ===, !== 


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     // var power = "fly" // it does not gives any error but not recomended
//     console.log(`user power: ${power}`);
    
// }

// // console.log(`user power: ${power}`); // gives error  becouse of functional scope
// console.log(`user power: ${score}`);

//implict scope
 const balance = 1000

 if (balance > 500) console.log("test");
//  if (balance > 500) console.log("test"), console.log("test2"); // hm aise multiple code ek hi line me likh skte h but  not recomended to do like this.
 


//nested if- else

const bankBalance = 1000

// if (bankBalance < 500) {
//     console.log("less than 500");
    
// }
// else if (bankBalance < 750) {
//     console.log("less than 750");
    
// } else if (bankBalance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log(" less than 1200");
    
// } 
 

// website loggin condition

const userLoggedIn = true
const debitCard = true
const premiumSubscription = "yes"
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && premiumSubscription) {
    console.log("Allow to buy course");
    
} 
 if (loggedInFromEmail || loggedInFromEmail) {
    console.log("User logged in");
    
} else {
    console.log("Logging In First to buy course");
    
} 