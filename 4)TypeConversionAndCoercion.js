// Type conversion

// int to string conversion
let num = String(6)
console.log(typeof num)

//  string to int coversion
let str = Number("7736")
console.log(typeof str)


//   Type coercion
/*
It is used to perform operations between two dofferent datatypes
eg1: number + string => string
eg2: number - string => number
*/

let coercion 
console.log(coercion, typeof coercion)
coercion = 10
console.log(coercion, typeof coercion)
coercion = 10 + " "
console.log(coercion, typeof coercion)
coercion = 21 - coercion
console.log(coercion, typeof coercion)


//    Boolean
bool = coercion
bool = Boolean(bool)
console.log(bool, typeof bool)

bool = !bool
console.log(bool, typeof bool)

bool = null
console.log(bool)

bool = undefined
console.log(bool)
