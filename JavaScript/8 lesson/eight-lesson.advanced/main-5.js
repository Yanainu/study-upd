'use strict'

//вывести числа от n до m (при условии что n < m)

//тут алерты, масссив - чтоб запихать все числа в один алерт/
// через for 

function showNumbersFrom_n_to_m_for() {

    let n = Number(prompt('Введите n'));
    let m = Number(prompt('Введите m'));

    const arr = [];

    if (n < m) {
        for (n; n <= m; n += 1) {
            arr.push(n);
        }
        alert(arr);
    } else {
        alert('n должно быть меньше m!')
    }
}

// через while 

function showNumbersFrom_n_to_m_while() {
    
    let n = Number(prompt('Введите n'));
    let m = Number(prompt('Введите m'));

    const arr = [];

    if (n < m) {
        while (n <= m) {
            arr.push(n);
            n += 1;
        }
        alert(arr);
    } else {
        alert('n должно быть меньше m!')
    }
}


// через do while


function showNumbersFrom_n_to_m_dowhile() {
    
    let n = Number(prompt('Введите n'));
    let m = Number(prompt('Введите m'));

    const arr = [];

    if (n < m) {
        if (n < m) {
            do {
                arr.push(n);
                n += 1;
            }
            while (n <= m) 
            alert(arr);
        }
    } else {
        alert('n должно быть меньше m!')
    }
}
