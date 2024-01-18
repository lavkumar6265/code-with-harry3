// let arr = [11,22,44,33,44,45,22,34,87,33,56,77,33,89,34,];
// console.log(arr);
// console.log(arr.lastIndexOf(33));
// console.log(arr.indexOf(44));
// console.log(arr.push(555))
// arr.push(555)
// console.log(arr.findIndex(34))
// console.log(arr.reverse());
// console.log(arr);

// console.log(arr.sort())

// let str = "love";
// console.log(str);

// console.log(str[0]);

// str[0] = "e"
// // str = "ajju";
// // console.log(str);

// console.log(str[0])


// console.log(typeof(arr));

// represent as a string
// console.log(arr.toString(arr));

// join replace space in any string value or any charecter
// console.log(arr.join(' and '));

// arr.pop() delet last element in array

// arr.push(12) push element in last position

// arr.push("love");

// shift remove first element in at array
// console.log(arr.shift());

// console.log(arr.unshift("chandu"));
// delete arr[3];
// console.log(arr);

// let arr = ["love","chandu","ajju"];
// let arr2 = [11,675,98,22,33];
// arr2.splice(2,2,65,76,87,888,465,976);
// arr2.sort(function(a,b){
//     return (a-b);
// });

// console.log(arr2);
// let newArr = arr.concat(arr2);
// console.log(newArr);
// console.log(arr);
// console.log(arr2);


// let arr1 = [11,22,33,44,55];
// arr1.splice(-2,3,432,8376,8474)
// console.log(arr1);

// let arr1 = [11,22,33,44,55,66];
// console.log(arr1.slice(2,4));


// let fruits = ['apple', 'banana', 'orange'];

// fruits.forEach(function(fruit, index,fruits) {
//   console.log(`fruit name ${fruit} ${index} ${fruits}`);
// });


// for in loop use in object
// let person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer'
//   };
  
//   for (let key in person) {
//     console.log(key + ':', person[key]);
//   }
  

// for of loop in array

// let colors = ['red', 'green', 'blue'];

// for (let color of colors) {
//   console.log(color);
// }


// let arr= [11,22,33,44,55];

// help of map function
// let newArray = arr.map(a => a*2);

// map use in help of normal function
// let newArray = arr.map(function(element){
//     return element*2;
// });

// console.log(newArray);
// console.log(arr);

let arr = [11,22,33,445,56,34,2];

// const newArray = arr.filter(a => a>=22);

// console.log(newArray);

// const newArray2 = arr.filter(function(a){
//     a = a-10;
//     console.log(a);
//     return a>=22;
// })

// console.log(newArray2);

const add = function (a , b) {
    return a+b;
}
let a = [10,100,20,2030];
let sum = a.reduce(add);
console.log(sum);
// console.log(Array.from(11,22,33,44,55,44));