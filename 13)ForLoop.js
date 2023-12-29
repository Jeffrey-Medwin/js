const { log } = require("console");

let i, j;

for(i = 1; i <= 5; i++){
    console.log(`\nOuter For Loop ${i}`);
    for(j = 1; j <= 5; j++){
        console.log(`Inner For Loop ${j}`);
    }
}