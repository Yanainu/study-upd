'use strict'

//тоже все в консоли

//for

function showNumbersFrom10To1_for() {
    for (let number = 10; number >= 0; number -= 1) {
        console.log(number);
    }
}

//while

function showNumbersFrom10To1_while() {
    let number = 10; 

    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}

//do while

function showNumbersFrom10To1_dowhile() {
    let number = 10;

    do {
        console.log(number);
        number -= 1;
    } while (number >= 0);
}
