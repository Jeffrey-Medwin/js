//Consider it as the input from the user
let input = 'Name';

//Anything that is not in PRIMITIVE datatype is an object datatype
let alien = {
    Name: 'Jeff',
    Tech: 'JAVA',
    Age: 20,
    'Work Exp': 6
};
//Two ways to access the data in the object 
console.log(alien.Tech);
console.log(alien['Work Exp']);
console.log(alien.Age);
console.log(alien[input]);