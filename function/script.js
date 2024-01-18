// Normal function 

function nice(name,age,country) {
    console.log("My name is "+ name);
    console.log("That is a good boy " + name);
    console.log("His age is "+ age);
    console.log("He is from " + country);
}

// set defoult value in function
function defoult_1(a,b,c = 9) {
    console.log("sum of all number is this >> "+ (a+b+c));
}

defoult_1(10);
defoult_1(10,20);
defoult_1(10,20,30);

nice("love",20,"india");
console.log("second time call function");
nice("chandu",21,43);


// arrow function that function help to store function in a variable 
const func1 = (name) =>{
    console.log("my name is  >>> "+name);
}

func1("love");
func1("chandu");
func1("ajju");