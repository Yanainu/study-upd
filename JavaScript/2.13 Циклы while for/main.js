// 'use strict'

// /////////////////1

// //Какое последнее значение выведет код и почему

// let i = 3;

// while (i) {
//   alert( i-- );
// }
// //последнее выведенное будет 1

// /////////////////////////////2

// // Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// // Оба цикла выводят alert с одинаковыми значениями или нет?

// // Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i ); // 1 2 3 4 тут сначала увеличение потом сравнение потом вывод нуля не будет
// // в конце получается вывелось 4, потом сразу увеличение до 5 и 5<5 это ложь поэтому 5 уже не выведется

// // Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i ); // тут сначала сравнение ПОТОМ увеличение потом алерт, короче 1 2 3 4 5 
// //нуля нет пушто будет 0 < 5 верно потом увеличение до 1 и вывод уже 1. 
// //5 есть пушто будет выведено 4, потом 4<5(тру) потом увеличение и вывод пятерки

// ///////////////////////////// 3

// // Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// // Оба цикла выведут alert с одинаковыми значениями или нет?

// // Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i ); // будет 0 1 2 3 4 5 и после вывода 5 уже не выполнится условие
// // Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i ); //1 2 3 4 5
// //будет 1 2 3 4 и там и там я ошиблась. потому что шаг не влияет на сравнение. делается сравнение, потом алерт
// //и потом только шаг. 

// ///////////////////////////////// 4
// //При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 2; i <= 10; i = i + 2) console.log(i);

// /////////////////////////////// 5
// //Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// //замена
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}`);
//   i++;
// }

// /////////////////////////////////// 6
// // Напишите цикл, который предлагает prompt ввести число, большее 100. 
// // Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// // Цикл должен спрашивать число пока либо посетитель не введёт число, 
// // большее 100, либо не нажмёт кнопку Отмена (ESC).

// // Предполагается, что посетитель вводит только числа. 
// // Предусматривать обработку нечисловых строк в этой задаче необязательно.
// let number; 

// do {
//   number = prompt ('Введите число больше 100');
// } while (number <= 100);

///////////////////////  7
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.


//////////////// проверка одного числа
let n = prompt('введите число для проверки');

let result = true;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    result = false;
    break;
  } 
}
console.log(result)

//////////
let x = prompt('введите конец интервала');

for (let n = 2; n < x; n++) {

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      break;
    } else {
      console.log(n)
    } 
  }
}
