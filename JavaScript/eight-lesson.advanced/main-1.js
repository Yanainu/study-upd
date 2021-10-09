'use strict'

//тут все в консоли
// вывести числа от 0 до 10

//for

function showNumbersFrom1To10_for() {
    for (let number = 0; number <= 10; number += 1) {
        console.log(number);
    }
}

//while 

function showNumbersFrom1To10_while() {
    let number = 0;

    while (number <= 10) {
        console.log(number);
        number += 1;
    }
}

//do while 

function showNumbersFrom1To10_dowhile() {
    let number = 0;

    do {
        console.log(number);
        number += 1;
    } while (number <= 10);
}
