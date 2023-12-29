/*
 data is divided in two types.
1. primitive -> number, float, string, character
2. object ->  

*/

//           INTEGER
let hexaDecimal = 0xaab  //hexa numbers are represented with 0x at initial
console.log("Hexa decimal: ", hexaDecimal)

let bigInt = 105050505050500505050550n   //big int can be represented by n ath the end
console.log("Big Int: ", bigInt)

let exponentialNumber = 1.3e3  //exponential number have e in it. Here e refers to 10 to the power
console.log("Exponential number: ", exponentialNumber)

// Maximum number
console.log("MAximum value: ", Number.MAX_VALUE)

//Maximum safe value
console.log("Maximum safe value: ", Number.MAX_SAFE_INTEGER)


//          STRING (escape character -> \, \n, \t, \b)

let firstName = "Jeffrey"
let lastName = "Medwin"

let username = firstName + " " + lastName
console.log(username)


//     BOOLEAN

let bool = 5 < 6
console.log(bool)

//    NULL (OBJECT DATA TYPE)

let nothing   //its undefned
console.log(nothing)