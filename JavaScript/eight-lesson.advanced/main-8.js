'use strict' 

//- запрашивать числа через prompt, пока пользователь 
//не отправит пустое число или не нажмет "Отмена", 
//затем вывести эти числа

function showAllEnteredNumbers() {
    let number;
    const array = [];

    do {
        number = prompt('Введите число');
        array.push(number);
    } while (number)
    alert(array);
}

//запрашивать числа через prompt, 
// пока пользователь не отправит пустое число или не нажмет "Отмена", 
// затем вывести true для четных чисел и false для нечетных чисел

function showTrueForEvenNumbers() {
    let number;
    const array = [];

    for (number = prompt('введите число'); number; number = prompt('введите число')) {
        if (number % 2 === 0 && number != 0 && number != null) {
            array.push(true);
        } else {
            array.push(false);
        }
    }

    alert(array);
}

// // - запрашивать числа через prompt, 
// пока пользователь не отправит пустое число или не нажмет "Отмена", 
// затем выводить сколько разрядов в числе 
// ( 0 < n < 10 - один разряд , 9 < n < 100 - два разряда,  99 < n < 1000 - три разряда, и т.д)
//переводчик сказал что разряды числа это digit

function showDigits() {
    const array = [];
    let num;

    for (num = prompt('Введите число'); num; num = prompt('Введите число')) {
        let result = num.length;
        array.push(result);
    }

    alert(array);
}

// - запрашивать числа через prompt, и сразу же показывать результат 
// их деления на числа в массиве [1, 2, 3] до тех пор пока 
// пользователь не нажмет "Отмена" или не отправит пустую строку

function showDivisionResults() {
    
    const DivisionArray = [1, 2, 3];

    let num = Number(prompt('Введите число'));
    
    while (num) {

        for (let i = 0; i < DivisionArray.length; i += 1) {
            alert(num / DivisionArray[i]);
        }

        num = Number(prompt('Введите число'));
    }
}

