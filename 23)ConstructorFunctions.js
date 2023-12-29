/* 
Another form of METHODS

Use PASCAL Case while defining a constructor function

It works with the help of 'new' keyword
*/

function Bike(cc, brand, model){
    this.cc = cc;
    this.brand = brand;
    this.model = model;

    this.service = function(){
        console.log("Rectifying coolant");
    }
}

let Bike1 = new Bike(390, 'KTM', 'RC 390');
let Bike2 = new Bike(300, 'Benilli', 'TNT 300');

console.log(Bike1);
console.log(Bike2);
Bike1.service();