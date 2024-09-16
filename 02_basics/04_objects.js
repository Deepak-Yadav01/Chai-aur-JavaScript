// constructor method

const tinder = new Object() // singleton object
// console.log(tinder); // {}


//anothe way to decleare
const tinderUser = {}  // non singleton
// console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "simmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Deepak",
            lastname: "Yadav"
        }
    }
 }
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.userfullname);// gives undefined but
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj6 = {5: "e", 6: "f"}


const obj3 = { obj1, obj2}
// console.log(obj3 );

const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj6) // exactly same as object but good habit to do this type of stuff
console.log(obj5);

//{...name, ... name} works same as assign

const obj7 = {...obj1, ...obj2, ...obj6}
console.log(obj7);

// when values comes from database, generally values comes in the form of array of object i.e [{}].
const users = [
    {
        P1id: "1",
        email1: "rohitsharma@gmail.com"
    },
    {
        P2id: "2",
        email1: "rohitsharma264@gmail.com"
    },
    {
        P3id: "3",
        email1: "45rohitsharma@gmail.com"
    },
]
console.log( users[0]);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(Object.freeze(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); // false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true