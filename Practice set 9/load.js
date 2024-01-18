let newPromise = new Promise((resolve)=>{
    resolve(()=>{
        console.log("promise is resolve");
    });

    // reject(()=>{
    //     console.log('promise is reject');
    // })
})

newPromise.then(()=>{
    console.log('js file is load');
}).catch(()=>{
    console.log('js file does not load');
})