/*What is this keyword?
    keyword is used to call an property of an object


let bike = {
    cc: 300,
    brand: 'benilli',
    model: 'TNT 300',

    move: function() {
        console.log("Put gear and acclerate to move.");
        console.log(model);
    }
}

bike.move();


output:
it gives an error. To rectify it this keyword is used.
*/

let bike1 = {
    cc: 390,
    brand: 'KTM',
    model: 'RC 390',

    move: function() {
        console.log("Put gear and acclerate to move.");
        console.log(this.cc);
    }
}

let bike2 = {
    cc: 300,
    brand: 'benilli',
    model: 'TNT 300',

    move: function() {
        console.log("Put gear and acclerate to move.");
        console.log(this.cc);
    }
}

bike2.move(); 

/*Why it is called THIS keyword

*/