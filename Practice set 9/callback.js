// function callback(name){
//     console.log('your name is ' + name);
// }

// const loadImage = (img,callback) => {

//     let image1 = document.createElement('img');
//     image1.src = img;
//     image1.onload = callback("love");

//     document.head.append(image1);
// }

// loadImage('https://th.bing.com/th/id/OIP.wyfA5DGLCMP57ZxNxX997AHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',callback)

// function mainFunction(callback){
//     console.log('main function is called');
    
//     setTimeout(()=>{
//         const data = "data prossing is runing please wite a callback function";
//         callback(data);
//     })
// }

// function ProcessData(data1,callback2){
//     console.log(data1);
//     console.log('callback function is running now');

//     setTimeout(()=>{
//         console.log('second callback funtion is runinig Now ');
//         callback2();
//     },4000)
// }

// ProcessData(secondCall)

// mainFunction(ProcessData);

// console.log('call function is end ');

// function secondCall(){
//     console.log('second callback funtion is runing now');   
// }

