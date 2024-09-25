const myNums = [1, 2, 3, 4]

 const myTotal = myNums.reduce((accumulator, currentvalue) => {
    console.log(`accumulator value is: ${accumulator} and current value is: ${currentvalue}`);
    
    return accumulator + currentvalue
 }, 0) // 0 is the initial value, but hm 0 ki jagah koi bhi value de skte h
 console.log(myTotal); // 10 


 const shoppingCart = [
    {
        itemName: "js course",
        price: 9999,
    },
    {
        itemName: "py course",
        price: 2999,
    },
    {
        itemName: "mobile computing course",
        price: 3999,
    },
    {
        itemName: "Data structure course",
        price: 6999,
    }
 ]

  const priceToPay = shoppingCart.reduce((accumulator,item) => (accumulator + item.price) ,0)
  
console.log(priceToPay);

 