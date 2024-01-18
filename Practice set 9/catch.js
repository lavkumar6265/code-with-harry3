let a = prompt('Enter first number')

let b = prompt('Enter second number')

if(isNaN(a) || isNaN(b)){
    // custom error
    throw SyntaxError("sorry this is not alllow")
}

let sum = parseInt(a) + parseInt(b) ;


setTimeout(()=>{
    try {
        console.log("The sum is ",sum);
    } catch (error) {
        // console.log('Error aa gya bhai');   ;
        console.log(error.message);
        
    }
},5000)

console.log('function is end');
