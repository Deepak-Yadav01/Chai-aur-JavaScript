// object literals

const user = {
    username: "Deepak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database")
        // console.log(`userName: ${username}`);
        console.log(`userName: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.loginCount);
// console.log(user["signedIn"]);
console.log(user.getUserDetails());
// console.log(this); //  it gives {}



// constructor function

// const promiseOne =new Promise()
// const date = new Date() // new is the constuctor function



function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greetings = function(){
        console.log(`WELCOME: ${this.username}`);
        
    }

    return this  // return likhe ya na likhe by default return hota hi h
}

//  const UserOne =User("Deepak yadav", 15, false)
//  const UserTwo =User("js with Hitesh", 20, true) // hmne to isse print bhi nhi karaya but yah to overwrite kr gya
// console.log(UserOne);


const UserOne = new User("Deepak yadav", 15, false) // new keyword likne se hr variables ke pass ek nyi copy aati h jiska instense keval ussi variable tk hi hota h.
 const UserTwo = new User("js with Hitesh", 20, true) 
console.log(UserOne);
