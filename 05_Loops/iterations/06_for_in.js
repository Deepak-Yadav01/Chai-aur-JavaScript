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
    console.log(key);// it gives the index value
    
}