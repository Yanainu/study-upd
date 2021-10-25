'use strict'

//вывести числа от m до n (при условии что m > n) 
//for

function showNumbersFrom_m_to_n_for() {
    let m = Number(prompt('Введите m'));
    let n = Number(prompt('Введите n'));

    const array = [];

    if (m > n) {
        for (m; m >= n; m -= 1) {
            array.push(m);
        }
        alert(array);
    } else {
        alert('M должно быть больше N!')
    }
}

// while

function showNumbersFrom_m_to_n_while() {
    let m = Number(prompt('Введите m'));
    let n = Number(prompt('Введите n'));

    const array = [];

    if (m > n) {
        while (m >= n) {
            array.push(m);
            m -= 1;
        }
        alert(array);
    } else {
        alert('M должно быть больше N!')
    }
}

//do while

function showNumbersFrom_m_to_n_dowhile() {
    let m = Number(prompt('Введите m'));
    let n = Number(prompt('Введите n'));

    const array = [];

    if (m > n) {
        do {
            array.push(m);
            m -= 1;
        } while (m >= n);
        alert(array);
    } else {
        alert('M должно быть больше N!')
    }
}