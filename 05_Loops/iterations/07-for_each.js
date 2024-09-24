//for each(Higher Order Function)

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((element) => {
//     console.log(element);
// });

//or

// coding.forEach(function(val){
// console.log(val);

// })

// or

function printMe(item) {
    // console.log(item);   
}
// printMe(coding)
// coding.forEach(printMe)
coding.forEach( (item, index, array) => {
    // console.log(item, index, array );
    
})



const myCoding = [
    {
        languageName: 'javaScript',
        languageFileName: '.js'
    },
    {
        languageName: 'java',
        languageFileName: '.java'
    },
    {
        languageName: 'python',
        languageFileName: '.py'
    }
]

myCoding.forEach((item) => {
    // console.log(item);
    console.log(item.languageFileName);
    
})