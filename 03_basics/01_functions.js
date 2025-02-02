function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}
sayMyName() //reference for exicution

function addTwoNumbers (number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers() // NaN
addTwoNumbers(4, 5) // 9
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a") // 3a

addTwoNumbers(3, 2) //5
const result1 = addTwoNumbers(3, 2) //5

//function ke andr jo console h wo bs output ko show krta h,return nhi krta aur return nhi kiya to jo result1 variables h wo undefined h
console.log("result:", result1);// result: undefined


function addTwoNumber (num1, num2){
    
    let result = num1 + num2;
    console.log("Deepak"); 
    return result // function return ke baad ka code unreachable hota h aur ye ye code execute nhi hota
    console.log("yadav"); // jaise ki code ki ye line
    
    // return num1 + num2
}
const result = addTwoNumber(3, 2)
console.log("result:", result);// result: 5


function loginUserMessage(userName) {
    return `${userName} just logged in`
}
loginUserMessage("welcome Deepak Yadav")// here function is exicuted but there is no any code for render or displaying it
console.log(loginUserMessage("welcome Deepak Yadav"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); //undefined 




function loginUserMessage(userName) {
    if (userName === undefined) {
        console.log("Please Entre a username");
        return
    }
    return `${userName} just logged in`
}
loginUserMessage("welcome Deepak Yadav")// here function is exicuted but there is no any code for render or displaying it
console.log(loginUserMessage("welcome Deepak Yadav"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); //undefined 



function loginUserMessage(userName) {
    if (!userName) {
        console.log("Please Entre a username");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("welcome Deepak Yadav"));
console.log(loginUserMessage()); //undefined 