function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called"); 
}

function createUser(username, email, password){
    // SetUserName(username)
    SetUserName.call(this, username)
    // this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "456123")

console.log(chai);
