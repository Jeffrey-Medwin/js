let data = [1, 2, 3, 4, 5, 6];


//PUSH:-
/*
It tends to increase the size of the array and then inserts the value
*/
console.log(data.push(8)); 


//POP:-
/*
It removes the last element
*/
console.log(data.pop());

//SHIFT:-
/*
It removes the data from first
*/
console.log(data.shift());

//UNSHIFT:-
/*
Increases the size of the array and then inserts the value at the start of the array
*/
console.log(data.unshift(1));

//SPLICE:-
/*
Removes the element who's index is given as the parameter
*/
console.log(data.splice(1, 1));  //removes only one element
console.log(data.splice(1, 2));  //removes two element form the given index
console.log(data.splice(0, 2, 1))  //the first parameter refer the index, the second refers the no. of elements, the third refers to the element to be inserted

console.log(data)