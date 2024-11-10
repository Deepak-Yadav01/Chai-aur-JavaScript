
// console.log(Math.PI);
//  Math.PI= 5
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
// output of above consoleis: 

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


//Decleration of Object

// const myNewObject = Object.create(null)

const chai = {
    name: "milk chai",
    price: 540,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai)); // gives undefined ,because chai to keval naam hai object ka property to iske andr h jaise ki  name , price, isAvailable.
console.log(Object.getOwnPropertyDescriptor(chai, "price")); // it give: { value: 540, writable: true, enumerable: true, configurable: true } 


//define property on Object

Object.defineProperty(chai,'price', {
    // writable: false,
    // enumerable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for (const [key, value] of Object.entries(chai)) {
    
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}


