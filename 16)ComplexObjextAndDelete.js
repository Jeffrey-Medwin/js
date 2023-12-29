//Complex Object => Having an object inside another object is know as complex object.
let alien = {

    Name: 'Jeff',
    Tech: 'JAVA',
    Age: 20,
    'Work Exp': 6,

    Laptop : {
        cpu: 'i3',
        ram: 4,
    }

}

console.log(alien.Laptop.cpu.length);
console.log(alien.Tech5?.length); //adding a '?' will check weather the data is avaliable or not.

//   DELETE KEYWORD
delete alien.Laptop
console.log(alien);