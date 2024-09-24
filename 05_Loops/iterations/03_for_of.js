const  arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); 
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
