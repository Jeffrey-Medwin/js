let comp

//   String Comparision
/*
-> compares the first letter
-> if the first letters are same gos to the next letter
*/
let str1 = "pen"   
let str2 = "penci"  
comp = str1 < str2
console.log(comp)


//   Number Comparision
let num1 = 45
let num2 = 76
comp = num1 <= num2
console.log(comp)


//    String and Number Comparision
let str = "2"   //will be converted to int
let num = 2
comp = str > num
console.log(comp)


//   == operator
/*
unlike other programming lanuguages JS is losely typed language.
So instead of '==' we should use '===' for accuracy
*/

comp = str == num
console.log(comp)
comp = str === num
console.log(comp)

str = ''
num = false
comp = str == num
console.log(comp)
comp = str === num
console.log(comp)