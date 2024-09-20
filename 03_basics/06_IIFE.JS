// IIFE ---- Immeddiately Invoke Functon expressions
// global scope ke decleration se jo polution hota h usse deal krne ke liye iife  ka use krte h , syntax---(function decleration)(function call)

 (function checkIIFE() {
    // named IIFE
    console.log(`DB Connected`);
 })(); // code ko end krne ke liye " ; " lagana hi h


 // IIFE with the help of Arrow function

 ( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
 })("DEEPAK")