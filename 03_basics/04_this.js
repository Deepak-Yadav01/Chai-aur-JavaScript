const user = {
    username: "DeepakYadav",
    price: 999,
    
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);// this. is used for current context, means scope ke andr ki value ko hi access krega
        console.log(this);
        
    }

}
user.welcomeMessage()

user.username = "MahiYadav"
user.welcomeMessage() 
console.log(this);// {}



function chai() {
    console.log(this);  
}
chai()


// function chai() {
//     let username = "krishna"
//     console.log(this.username);  // this. can not be used in any function, it gives undefined
// }
// chai()