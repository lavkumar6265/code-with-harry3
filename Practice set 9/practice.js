let wada1 = new Promise((myresolve,myreject)=>{
    setTimeout(()=>{
        console.log('settimeout 1 run');
        
    },2000)
    myresolve(true);
})

let output = wada1.then(()=>{
    let wada2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('settimeout 2 run');
        },3000)
        resolve("wada 2 run");
    })
    return wada2;
})

output.then((value)=>{
    console.log(value);
    
})