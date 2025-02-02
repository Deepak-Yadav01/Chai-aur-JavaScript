// singleton

// there are maily two methods to decleare an objects
// 1. literal method 
// 2. constructor
//object.create

//object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Deepak",
    "full name": "Deepak Yadav", // there is  no any chace to get  access of it using dot method, hence we used the 2nd one.
    [mySymbol]: "mykey1",// mykey1 ki jagah hm apni psand ke koi bhi name, number, ya symbol rakh sakte h. // mySymbol ko [] me rakhege tabhi symbol datatype ayega  nhi to string aayega
    age: 22,
    location: "lucknow",
    email: "dspyadavdeepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.lastLoginDays);
// //another way to access object
// console.log(jsUser["email"]); //  key value is treated as astrings hence instead of [email], we uses ["email"]
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);
// console.log(Object.getOwnPropertySymbols(jsUser)); // Output: [ Symbol(key1) ]


jsUser.email = "dy@google.com"

// Object.freeze(jsUser)
jsUser.email = "dy@ chatgpt-google.com"
console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user");
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);


jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingTwo);
