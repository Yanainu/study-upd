'use strict'

//задачи по условиям:
//- вывести true, если n и m равны, иначе false

function checkEquality() {
    const n = prompt('Введите n');
    const m = prompt('Введите m');
    
    if (n === m) {
        alert(true);
    } else {
        alert(false);
    }
}

//вывести true, если n > m, иначе false
function check_N_biggerThan_M() {

    const n = prompt('Введите n');
    const m = prompt('Введите m');

    if (n > m) {
        alert(true);
    } else {
        alert(false);
    }
}

// - вывести true, если m > n, иначе false
function check_M_biggerThan_N() {
    const m = prompt('Введите m');
    const n = prompt('Введите n');

    let result = (m > n) ? true : false;
    
    alert(result);
}

// - вывести true, если m и n равны, иначе false

// - вывести true, если m > n > k, иначе false
function check_M_biggerThan_N_biggerThan_K() {
    const m = prompt('Введите m');
    const n = prompt('Введите n');
    const k = prompt('Введите k');
    outer: do {
        
        if (isNaN(m) == true || isNaN(n) == true || isNaN(k) == true) {
            alert('вы ввели что-то не то');

        } else if (n == null || m == null || k == null) {
            alert('вы отменили ввод');

        } else {
            if (m > n && n > k) {
                alert(true);
            } else {
                alert(false);
            }
        }
        break outer;
    } while (m && n && k);//цикл закрылся
}//функция закрывается


// - вывести true, если m > n < k, иначе false 
//(ТОЛЬКО ТУТ я пока добавила проверку на то что введено число и не отменен ввод, и то всрато немного)
function check_N_isSmallest() {
    const m = prompt('Введите m');
    const n = prompt('Введите n');
    const k = prompt('Введите k');
    outer: do {
        
        if (isNaN(m) == true || isNaN(n) == true || isNaN(k) == true) {
            alert('вы ввели что-то не то');

        } else if (n == null || m == null || k == null) {
            alert('вы отменили ввод');

        } else {
            if (n < m && n < k) {
                alert(true);
            } else {
                alert(false);
            }
        }
        break outer;
    } while (m && n && k);
}


// - вывести true, если m,n,k четные, иначе false
function checkMNK_areEven() {

    const m = prompt('Введите m');
    const n = prompt('Введите n');
    const k = prompt('Введите k');

    if ((m % 2 === 0) && (n % 2 === 0) && (k % 2 === 0)) {
        alert(true);
    } else {
        alert(false);
    }
}
// - вывести true, если m и n равны, и n < k, иначе false

function check_M_equal_N_and_N_isLessThan_K() {

    const m = prompt('Введите m');
    const n = prompt('Введите n');
    const k = prompt('Введите k');

    if ((m === n) && (n < k)) {
        alert(true);
    } else {
        alert(false);
    }

}

// - вывести true, если m + n равны k, иначе false

function check_M_plus_N_equals_K() {

    const m = Number(prompt('Введите m'));
    const n = Number(prompt('Введите n'));
    const k = Number(prompt('Введите k'));

    if (m + n === k) {
        alert(true);
    } else {
        alert(false);
    }
}

// - вывести true, если m + k < n, иначе false

function check_M_plus_K_isLessThen_N() {

    const m = Number(prompt('Введите m'));
    const k = Number(prompt('Введите k'));
    const n = Number(prompt('Введите n'));

    if ((m + k) < n) {
        alert(true);
    } else {
        alert(false);
    }
}