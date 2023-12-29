// FOR IN loop is used in iterating over objects

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

for(let key in alien){
    console.log(key,": ", alien[key]);
}

for(let key in alien.Laptop){
    console.log(key, ": ", alien.Laptop[key]);
}