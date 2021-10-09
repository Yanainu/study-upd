'use strict'

//вывести НЕчетные числа от 0 до 10'

//odd нечетные

//for 

function showOddNumbers_for() {
    for (let number = 1; number <= 10; number += 1) {
        if (number % 2 != 0) {
            console.log(number);
        }
    }
}

//while

function showOddNumbers_while() {
    let number = 1; 
    while (number <= 10) {
        if (number % 2 != 0) {
            console.log(number);
        }
        number += 1;
    }
}

//do while 

function showOddNumbers_dowhile() {
    let number = 1;
    do {
        if (number % 2 != 0) {
            console.log(number);
        }
        number += 1;
    } while (number <= 10);
}
