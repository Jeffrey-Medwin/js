// The arrow function is an advanced form of anonymous function.

/*

let addition = function(num1, num2) {
    return num1 + num2;
}
let sum = addition
let result = sum(3, 10);
console.log(`\n${result}`);
console.log(sum);

*/

// if an arrow function contains only one line of code with a return statement we no need to mention '{ }' or 'return' keyword.
let addition = (num1, num2) =>  num1 + num2;
console.log(addition(2, 10));


//Multi line arrow function
let greet = () => {
    let name = 'Jeffrey Medwin R';
    console.log(`\nHi ${name}`);
}
greet();


/*
Assignment:
add two positive numbers if the numbers are negative don't do anything.
*/

let Assignment = (num1, num2) => {
    if (num1 < 0 || num2 < 0) {
        return "Entered value is negative";
    }
    else{
        return num1 + num2;
    }
}
console.log("\n", Assignment(4, -7));