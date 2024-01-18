// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("promise is resolve");
            
//             resolve(543)
//         },4000);
//     })
// }

// console.log('Loading moduls');
// console.log('Do something else');
// console.log('Load data');

// let data = getData();

// if you want to wite for promise resolve
// we can use normal methode

// data.then((v)=>{
//     console.log(data);
//     console.log("pprocess data");
//     console.log('end pending');
// })



//if you want clean code then use another method async and await

// async function main(){
//         let data = await getData();
//         console.log(data);
        
//         console.log("pprocess data");
//         console.log('end pending');

// }
// main();

// async function myFunction(){
//     let a = new Promise( myName(()=>{

//         setTimeout(()=>{
//             console.log('my name is love');
//             console.log('what is your name');
//         },3000)
//     }));

//     let b = await a;

//     return b;
// }

// myFunction();

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
  