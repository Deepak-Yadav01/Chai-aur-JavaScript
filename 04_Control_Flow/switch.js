// switch syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = "a"
const month = 2

switch (month) {
    case 1:
        console.log("janaury");
        break;
    case 2:
        console.log("febraury");
        break;  // agr hmara case mactch kr gya aur wha break nhi likha ho to wo value agle case ko bina match kiye hi wha ke code ko execute kr deta h,,keval default case ke sath aisa nhi hota
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;

    default:
        console.log("Any case not matches");
        
        break;
}