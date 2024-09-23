// Nullish Coalescing Operattor (??): null , undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1); // 5


// let val1;
// // val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1);  // 10



// let val1;
// // val1 = 5 ?? 10
// val1 = undefined ?? 15
// console.log(val1);  // 15



let val1;
val1 = null ?? "Rohit" ?? "sharma"

console.log(val1);  //Rohit, jo value pahle milti h usse hi print krta h
