function fetchData() {
    return new Promise(function(resolve, reject) {
        // Simulate fetching data asynchronously after 2 seconds
        setTimeout(function() {
            const success = 1; // Simulate success/failure randomly

            if (success>5) {
                const data = "Fetched data!";
                resolve(data);
            } else {
                const error ="Failed to fetch data";
                reject(error);
            }
        }, 2000);
    });
}

// Using the Promise
fetchData()
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

// const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 7000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));

// const promise4 = new Promise((resolve,reject)=>{
//     let a = 3;

//     if(a>6){
//         resolve("ok")
//     }
//     else{
//         let error = "promise not resolve"
//         reject(error);
//     }
// })

// const allPromises = Promise.all([promise1, promise2, promise3]);

// allPromises
//   .then(value => {
//     console.log('All promises resolved:', value);
//   })
//   .catch(error => {
//     console.error('One of the promises was rejected:', error);
//   });

// const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000));
// const promise2 = new Promise((_, reject) => setTimeout(() => reject(new Error('Rejected')), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));

// const allSettledPromises = Promise.allSettled([promise1, promise2, promise3]);

// allSettledPromises
//   .then(results => {
//     console.log('All promises settled:', results);
//   });


// const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 10000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));

// const racePromise = Promise.race([promise1, promise2, promise3]);

// racePromise
//   .then(winner => {
//     console.log('The first promise settled:', winner);
//   })
//   .catch(error => {
//     console.error('All promises were rejected:', error);
//   });

const promise1 = new Promise((_, reject) => setTimeout(() => reject('One failed'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));

const anyPromise = Promise.any([promise1, promise2, promise3]);

anyPromise
  .then(winner => {
    console.log('The first promise fulfilled:', winner);
  })
  .catch(errors => {
    console.error('All promises were rejected:', errors);
  });
