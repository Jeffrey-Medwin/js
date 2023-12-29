let num = [];

num[0] = 4;
num[99] = 0;

// For of loop
console.log("FOR OF loop");
for(let n of num){
    console.log(n);
}

// For in loop
console.log("\nFOR IN loop");
for (let m in num) {
    console.log(m);  //Prints the index
    console.log(num[m]); //prints the value
}


// console.log(num);
// console.log(num.length);