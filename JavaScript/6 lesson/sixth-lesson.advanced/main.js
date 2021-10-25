'use strict'

const arr = [];

let num = prompt('Введите число');

//заполнение
do {
    if (isNaN(num) == false) {
        arr.push(num);
        num = prompt('Введите еще число');
    } else  {
        arr.push('чел, это не число');
        num = prompt('Введите еще число');
    }
} while (num);

//вывод

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}


