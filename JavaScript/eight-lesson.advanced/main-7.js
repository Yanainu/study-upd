'use strict'

// вывести числа от n до m у которых остаток от деления на k равен 0
// тоже массив для удобства вывода

function showNumbers_mod_k_for() {

    let n = Number(prompt('Введите n (начало интервала)'));
    let m = Number(prompt('Введите m (конец интервала)'));
    let k = Number(prompt('Введите k (на что будем делить)'))

    const array = [];

    for (n; n <= m; n += 1) {
        if (n % k === 0) {
            array.push(n);
        } else continue;        
    }
    alert(array);
}

//while

function showNumbers_mod_k_while() {

    let n = Number(prompt('Введите n (начало интервала)'));
    let m = Number(prompt('Введите m (конец интервала)'));
    let k = Number(prompt('Введите k (на что будем делить)'))

    const array = [];

    while (n <= m) {
        if (n % k === 0) {
            array.push(n);
            n += 1;
        } else {
            n += 1;
        }
    }

    alert(array);

}

//do while

function showNumbers_mod_k_dowhile() {

    let n = Number(prompt('Введите n (начало интервала)'));
    let m = Number(prompt('Введите m (конец интервала)'));
    let k = Number(prompt('Введите k (на что будем делить)'))

    const array = [];

    do {
        if (n % k === 0) {
            array.push(n);
            n += 1;
        } else {
            n += 1;
        }
    } while (n <= m);
    
    alert(array);

}