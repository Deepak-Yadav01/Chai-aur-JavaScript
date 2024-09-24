// for of loop on an Object

const myObject = {
    'game1' : "chess",
    'game2' : "contra",
    'game3' : "cricket",
    'game4' : "badminton"
 }

 // "myObject is not iterable" by this method
 for (const [key, value] of myObject) {
    console.log(key," :- ", value);  
 }

