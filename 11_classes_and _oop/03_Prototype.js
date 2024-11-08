
let MyHeros = ["Krish", "Saktimaan"]

let heroPower = {
    Krish: "ByNature",
    Saktimaan: "Sprituals",

    getSaktimaanPower: function(){
        console.log(`Sprituals power is related to ${this.Saktimaan}`);
    }
}

Object.prototype.DEEPAK = function(){
    console.log(`DEEPAK is present in all objects`);
    
}

Array.prototype.heyDeepak = function(){
    console.log(`I say hello`);
    
}

heroPower.DEEPAK() // for object

MyHeros.DEEPAK() // for array

MyHeros.heyDeepak() // giving accesss to array only
// heroPower.heyDeepak()



// inheritance

const user = {
    name: "Deepak",
    email: "dspyadav@gmail.com"
}

const Teacher = {
    makeVideos: true,
}
const TeachingSupport ={
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'js Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let myName = "DEEPAK      "
let mySurname = "YADAV     "

// console.log(myName.length);
// console.log(myName.trim().length);

// console.log(mySurname.length);
// console.log(mySurname.trimEnd().length);

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
myName.truelength();
mySurname.truelength();

"deepak yadav".truelength();
"HELLO         ".truelength();