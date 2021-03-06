'use strict'

//-------------------------------------------------------------------------------------------- ЗАДАЧА 1

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:


//код 
Function.prototype.defer = function(ms) {
  setTimeout(() => {
    return this();
  }, ms)
}


function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

//-------------------------------------------------------------------------------------------- ЗАДАЧА 2

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:


f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms) {
  return (a, b) => {
    setTimeout(() => {
      return this(a, b);
    }, ms)
  }
}

f.defer(1000)(1, 2);

//-------------------------------------------примеры для закрепления

function calculate() {
  return function(a, b) {
    return a + b;
  }
}

calculate()(1, 3);

//------------------------------------------

function calculate(a) {
  return function(b) {
    return function(c) {
      return a+b+c;
    }
  }
}

calculate(1)(2)(4)

