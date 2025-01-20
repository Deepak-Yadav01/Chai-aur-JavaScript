// Stack ( is used for primitive dtatypes) ,'decleared variables ki copy milti h' ,
//  Heap ( for Non-primitive), "original value ka reference milti h"

let myCourseName = "java-script"

let anotherCourse = myCourseName
console.log(myCourseName);
anotherCourse = "chai-aur-code"

console.log(myCourseName);
console.log(anotherCourse);



let userOne = {
    email: "dspyadavdeepak@gmail.com",
    myName: "Deepak Yadav",
}
console.log(userOne.email);

let userTwo = userOne

userTwo.email = "dy@google.com"

console.log(userOne.email);
console.log(userTwo.email);

