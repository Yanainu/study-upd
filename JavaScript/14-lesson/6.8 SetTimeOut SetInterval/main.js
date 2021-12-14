'use strict'

//-------------------------------------------------------------------------ЗАДАЧА 1

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

function printNumbers(from, to) { // НЕ ЗАСЧИТЫВАЕТСЯ я подсмотрела структуру потому что вообще не было понимания как писать чтото более сложное чем sayhi

  let i = from;

  let timerId = setInterval(() => {
    if (i <= to) {
      console.log(i);
      i++;
    } else {
      clearInterval(timerId);
    } 
  }, 1000)
}

printNumbers(4, 10)

// Используя рекурсивный setTimeout. тут уже сама написала

function printNumbers(from, to) {
  let counter = from;

  let timerId = setTimeout(() => {
    if (counter <= to) {
      console.log(counter);
      counter = counter += 1;
      setTimeout(printNumbers, 0, counter, to)//задержка 0 т.к. уже есть 1000 в конце
    } else {
      clearTimeout(timerId)
    }
  }, 1000)
}
printNumbers(4, 7)


//-------------------------------------------------------------------------ЗАДАЧА 2

// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, 
//для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
//я предположила, что
// settimeout начнет отсчет времени ПЕРЕД циклом, выполнится тоже перед циклом т.к. цикл долгий 100мс уже пройдет
//алерт покажет 0

//и ниичего не угадала вообще

//ОКАЗЫВАЕТСЯ Любой вызов setTimeout будет выполнен только после того, как текущий код завершится. 
//А я думала что как только парсер прочитает строку с settimeout. ну што ж ладно 