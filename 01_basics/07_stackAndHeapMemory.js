// Stack (primitive) , Heap (Non-primitive)

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

let userTwo = userOne

userTwo.email = "dy@google.com"

console.log(userOne.email);
console.log(userTwo.email);

