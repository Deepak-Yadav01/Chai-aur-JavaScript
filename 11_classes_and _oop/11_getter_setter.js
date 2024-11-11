class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        // return this.email.toUpperCase()
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    
    get password(){
        return `${this._password}01yadav`
    }
    set password(value){
        this._password = value
    }
}

const Deepak = new User("dsp@google.com", "abc")
console.log(Deepak.email);
console.log(Deepak.password);