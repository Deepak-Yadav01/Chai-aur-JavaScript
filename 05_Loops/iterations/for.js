for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
      
}



for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
        
    }
    console.log(element);
      
}



for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 0; j <= 20; j++) {
    console.log(`Inner loop value: ${j} and  Outer loop ${i}`);  
   }  
}



for (let i = 1; i <= 20; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j); 
   }   
}



let myArray = ["flash", "batman","suparman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}



let n =19
for (let i = 1; i <= 10; i++) {
    console.log(n + " * " + i +" = " + n*i);
}



// break and continue

for (let i = 1; i <= 20 ; i++) {
    if (i == 5) {
        console.log(`5 is Detected`);
        break //iske baad code nhi chalega
    }
   console.log(`value of i is ${i}`); 
}



for (let i = 1; i <= 20 ; i++) {
    if (i == 5) {
        console.log(`5 is Detected`);
        continue // jo codition match kra h keval wahi line nhi chalegi baaki uske baad ke code chalenge
    }
   console.log(`value of i is ${i}`); 

}