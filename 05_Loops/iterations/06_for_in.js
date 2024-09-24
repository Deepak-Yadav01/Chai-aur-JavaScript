const myObject = {
    js: "javaScrit",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop on Arrays

const programming = ["c", "py", "js", "react", "java"]

for (const key in programming) {
    // console.log(key);// it gives the index value 
    console.log(programming[key]);
}



// for in loop om map

const map = new Map();
 map.set('In', "India")
 map.set('US', "United State of America")
 map.set('FR', "france")
 map.set('In', "India")// map me unique values hi aati h
 map.set('RS', "Russia")
 
for (const key in map) {
    console.log(key);
    
}
