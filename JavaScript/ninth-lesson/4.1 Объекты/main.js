'use strict'

///////////////// ЗАДАЧА 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
const user = {};
// Добавьте свойство name со значением John.
user.name = 'John';
// Добавьте свойство surname со значением Smith.
user.surname = 'Smith';
// Измените значение свойства name на Pete.
user['name'] = 'Pete'; // user.name = 'Pete';
// Удалите свойство name из объекта.
delete user.name;

///////////////// ЗАДАЧА 2

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    let result = true; //по умолчанию результат true(объект пустой)

    for (let key in obj) { //перебираем объект по ключам
        if (key in obj) {//если хоть один ключ обнаружен - результат становится false, объект уже не пустой
            result = false;
            break;
        } 
    }

    return result;//возвращаем итоговый результат 
}

//версия учебника
function isEmpty2(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }
//мне так хуже читается, с иф понятнее

///////////////// ЗАДАЧА 2

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };

// // это будет работать?
// user.name = "Pete"; - ДА

//////////////////////// ЗАДАЧА 3

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

function salariesSum(salaries) {
  let sum = 0;

  for (let key in salaries) {
      sum += salaries[key]; 
  }
  return sum;
};

salariesSum(salaries);



//////////////////////// ЗАДАЧА 4
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

//multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof(menu[key]) === 'number') {
      menu[key] = menu[key] * 2;
    }
  }
}//еее работает