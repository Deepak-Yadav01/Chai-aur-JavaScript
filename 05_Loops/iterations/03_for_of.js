const  arr = [1, 2, 3, 4, "a"]

for (const num of arr) {
    console.log(num);  // it gives the array values ,while for in  gives the index values
    // console.log(arr.length);
    // console.log(arr);
}



const greetings = "Hello world!" // Hello world me  jo space  h usse hatane ke liye continue ka use kiya gya h
for (const element of greetings) {
  if (element == " ") {
    continue
  }
//   console.log(` Each char is ${element}`);
}
