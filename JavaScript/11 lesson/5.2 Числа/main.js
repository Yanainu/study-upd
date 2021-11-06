'use strict'


////////////////////////ЗАДАЧА 1
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

let a = parseFloat(prompt('Введите первое число'));//parse чтобы привыкать к нему вместо + и Number
let b = parseFloat(prompt('Введите второе число'));
let sum = a + b;
alert(sum);


////////////////////////ЗАДАЧА 2
// Почему 6.35.toFixed(1) == 6.3?

// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// Например:

// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?

// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

//ПРЕДПОЛОЖУ, что это из-за косяков в двоичной системе представления числа, как с 0.1 и 0.2
//проверила если сделать toFixed(20) то станет '6.34999999999999964473' вот почему получается 6.3
//окгрулить правильно тут видимо через умножение на 10, округление и деление обратно
let x = 6.35;
let xRounded = Math.round(x*10)/10;
alert(xRounded);

////////////////////////ЗАДАЧА 3
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, 
// пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку 
// или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {

    let x = +prompt('Введите число', '0');//+ как раз потому что мне нужно NaN для проверки

    while (isNaN(x) == true) {
        x = +prompt('Введите число');
        if (isNaN(x) == false || x == null) break;
    }
    return x;//в задании просто вернуть поэтому без алерта
}





////////////////////////ЗАДАЧА 4
// Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}
//тут дробь 0.2, она не ровная и не будет момента когда мы получим 10 ровно, поэтому не будет 
//условия для прекращения цикла



////////////////////////ЗАДАЧА 5
// Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой 
//от min до max (но не включая max).

// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

//ТУТ МОЗИЛЛА ЗАСПОЙЛЕРИЛА РЕШЕНИЕ

function random(min, max) {
    return min + Math.random() * (max - min);
  }

////////////////////////ЗАДАЧА 6

// Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// Можно использовать решение из предыдущей задачи.

function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

  //более клевое решение пока не придумала