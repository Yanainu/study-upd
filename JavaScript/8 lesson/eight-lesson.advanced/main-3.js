'use strict'

//вывести четные числа от 0 до 10'

//even типа четные

//for 

function showEvenNumbers_for() {
    for (let number = 1; number <= 10; number += 1) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}


//while

function showEvenNumbers_while() {
    let number = 1;
    while (number <= 10) {
        if (number % 2 === 0) {
            console.log(number);
        }
        number += 1;
    }
}

//do while 

function showEvenNumbers_dowhile() {
    let number = 1;
    do {
        if (number % 2 === 0) {
            console.log(number);
        }
        number += 1;
    } while (number <= 10);
}
