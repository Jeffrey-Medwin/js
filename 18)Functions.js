/*
Js treat functions as an objects....

Defining the function

Use camel case while defining a normal function
*/
function functionBasic() {
    console.log("Function Basic");
}
//calling the function
functionBasic();
//As the function haven't returned any value the str value will be undifined
let str1= functionBasic();
console.log(`\n${str1} \n`);



//Function Return
function functionReturn() {
    return "Function Return";
}
let str2 = functionReturn();
console.log(`${str2}\n`);



//Function Parameters
// Creating two parameters and passing only one value lead to 'NaN' error.
function functionParameter(param){
    return `${param}`;
}
let what = 'Function Parameter';
let str3 = functionParameter(what);
console.log(str3);



//Function Expresion
//It is an anonymous function as it doesn'thave any name.
let addition = function(num1, num2) {
    return num1 + num2;
}
let sum = addition
let result = sum(3, 10);
console.log(`\n${result}`);
console.log(sum);