'use strict'

//-----------------------------------------------------------------------------------------------ЗАДАЧА 1 

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//РЕШЕНИЕ

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

let argsArray = [];//если я массив для хранения аргументов задам в функции то потом я его не вызову

function spy(func) {
  return function(...args) {
    //надо аргументы сложить в массив...
    argsArray.push(args);
    //и сделать вызов функции с результатом
    return func(...args);
  }
}
work = spy(work);

work(1, 2);
work(4, 5);

for (let args of argsArray) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//ЭТО РАБОЧЕЕ ,НО  НЕДОСТАТОЧНОЕ РЕШЕНИЕ я не понимаю полглавы просто
//не понимаю как сделать чтобы было именно work.calls 





//-----------------------------------------------------------------------------------------------ЗАДАЧА 2

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

//решение

function delay(func, time) {
  return function(x) {
    setTimeout(() => {
      return func(x)
    }, time);
  }
}
//вроде все работает...

//-----------------------------------------------------------------------------------------------ЗАДАЧА 3

// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

// Например:

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(func, time) {
  let canCallFunc;

  setTimeout(() => {
    console.log('settimeout сработал')
    canCallFunc = true;
    
  }, time)

  if (canCallFunc) {
    return func();
  }
}

debounce(alert, 5000)

function debounce(func, time) {
  let canCallFunc = true;
  func();
  
  return function() {
    return func();
  }
  
  canCallFunc = false;

  return function() {

    setTimeout(() => {
      canCallFunc = true;
    }, time)
    
    if (canCallFunc) {
      func();
    } 

    canCallFunc = false;
    
  }
}

debounce(alert, 5000)