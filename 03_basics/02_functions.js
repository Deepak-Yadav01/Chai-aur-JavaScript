//shoping carts

function calculateCartPrice(...num1) { // here ... is a rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));//[200, 400, 500, 2000]
 


function calculateCartPrice1(val1, val2, ...num1) { // here ... is a rest operator
    return num1
}
console.log(calculateCartPrice1(200, 400, 500,2000));//[ 500, 2000 ]
 


const user = {
    username: "Deepak",
    age: 22
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
}
handleObject(user)
handleObject({})
handleObject({
    username: "sams",
    age: 42
})



const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1] //400
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 100, 600]));