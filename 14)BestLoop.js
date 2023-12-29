/*
FOR LOOP:
    When you know the starting point, ending point and the initialization value the for will be the best loop.
    Eg. print the numbers form 1 - 100 if it's divisible by 3
*/

let i;
for( i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log(`${i}`);
    }
}

/*
WHILE LOOP:
    When the starting point, ending point and the incrementation value is unknown then the while loop will be the better use.
    Eg. palindrome
*/

let number = 123456789;
let result = 0, temp;
while(number > 0){
    temp = number % 10;
    result = result * 10 + temp;
    number = parseInt(number / 10);  
}
console.log(result);