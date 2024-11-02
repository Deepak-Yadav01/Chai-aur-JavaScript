const promiseOne = new Promise((resolve, reject) => {
    //Do an async  task
    //DB calls, cryptography, network related
   setTimeout(function(){
    console.log('Async task is complete');
    resolve()
   }, 3000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})





new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    },4000)
})
.then(function(){
    console.log('learning promises');
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
     resolve({username: "DEEPAKYADAV", email: "dspyadavdeepak01@gmail.com"})
    },2000)
})

promiseThree.then(function(user){
 console.log(user);
 
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        // let error = true
        let error = false
        if (!error) {
            resolve({username: "DY", passward: "dspyadav123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },5000)
})

 promiseFour.then((user) =>{
  console.log(user);
  return user.username
})
.then((myusername) => {
  console.log(myusername);
})
.catch(function(error){
    console.log(error);  
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})




const promiseFive =new Promise((resolve, reject) => {
    setTimeout(function(){
        // let task = false
        let task = true
        if (!task) {
            resolve({username: "mahi singh", passward: "dspyadav123"})
        }else{
            reject('ERROR: Details not found')
        }
    },1000)
})
async function consumePromiseFive() {
   try {
    const result = await promiseFive
   console.log(result);
   } catch (error) {
      console.log(error);
   }
}

consumePromiseFive()





async function getAllUsers() {
   try {
    const results = await fetch('https://randomuser.me/api/')
    //   console.log(results);

      const data = await results.json()
      console.log(data);
   } catch (error) {
    console.log("Error: ", error);
    
   }
   
}
getAllUsers()




fetch('https://randomuser.me/api/')
.then((result) => {
    return result.json()
})
.then((response) => {
    console.log(response);
    
})
.catch((error) => {
    console.log(error);
    
})


// promise.all
// yes this is also available, kuch reading hm khud se bhi kr le.
