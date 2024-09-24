 const map = new Map();
 map.set('In', "India")
 map.set('US', "United State of America")
 map.set('FR', "france")
 map.set('In', "India")// map me unique values hi aati h
 map.set('RS', "Russia")
 
 console.log(map);

//  loop on map

 for (const key of map) {
    console.log(key); // it give array values 
 }
 
 for (const [key, value] of map) {
    // console.log(key, ":-", value); 
    
 }
