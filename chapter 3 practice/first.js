let obj = {
    "love":23,
    "chandu":43,
    "ajju":65
}

// for (const key in obj) {
//     console.log(obj[key]);
// }


// for loop ki help se object ki help se print karna 
let keys = Object.keys(obj);

for(let i = 0;i<keys.length;i++){
    let key = keys[i]
    console.log(key);
    console.log(obj[key]);
}

