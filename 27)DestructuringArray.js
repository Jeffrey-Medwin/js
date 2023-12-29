let num = [2, 4, 6, 9];
console.log(num);

//Destructuring
let [a, b, , d] = num;
console.log(d);


//swap
let num1 =   4;
let num2 = 5;
[num1, num2] = [num2, num1];
console.log("A: " + a + "  B:" + b);

//String
let str = "My name is Jeffrey Medwin R".split(' ');
console.log(str);

//Destruction
let[n1, n2, n3, ...n6] = str; //Thee dots refers to holding of remainig values..... Must use only three dots.
console.log(n6);