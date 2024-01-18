let obj = {
    name:"love",
    role:"coder",
    age:20
}

for(const ke in obj){
    // const element = obj[ke];
    // console.log(ke,element);

    console.log(ke,obj[ke]);
}

for (const it of "love") {
    console.log(it);
}
