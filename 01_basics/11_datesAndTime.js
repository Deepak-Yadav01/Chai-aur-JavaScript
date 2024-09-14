// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());      // Fri Sep 13 2024 20:42:57 GMT+0530
// console.log(myDate.toDateString());  // Fri Sep 13 2024
// console.log(myDate.toISOString());   // 2024-09-13T15:15:10.059Z

// console.log(myDate.toJSON());

// console.log(typeof myDate); // object
// console.log(myDate.toLocaleString()); // 9/13/2024, 8:53:23 PM

const myCreatedDate = new Date(2004, 10,21 ) // in js months starts with 0 for jan,1 for feb and so on.
// console.log(myCreatedDate.toDateString());//Sun Nov 21 2004

let anotherCreatedTimeAndDate = new Date(1947, 7, 15 , 12, 0)
// console.log(anotherCreatedTimeAndDate.toLocaleString());//  8/15/1947,12:00:00 PM

const yyMMddFormat = new Date("2023-01-11")
// console.log(yyMMddFormat.toLocaleDateString());// here  in YY-MM-DD format, jan starts with 01.


let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //17262867703712 (in miliseconds)
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.getDate());



// console.log(Date.now());  //present date in miliseconds
// console.log(Math.floor(Date.now()/1000));//current date in seconds


