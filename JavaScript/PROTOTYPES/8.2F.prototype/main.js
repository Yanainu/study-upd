'use strict'

//-------------------------------------------------------------------------------------------- ЗАДАЧА 1

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
//--------------------------------
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};//вот эту

alert( rabbit.eats ); // покажет undefided т.к. мы обнулили Rabbit.prototype и eats там больше нет
//НЕПРАВИЛЬНО, я не уловила,что изменение Rabbit.prototype не повлияет на уже созданный по нему объект, а повлияет только на новые. ок

//------------------------------
// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;//вот это замененная

alert( rabbit.eats ); // false, т.к. ссылается на измененный Rabbit.prototype.eats = false
//тут правильно. тогда ПОЧЕМУ В ПРЕДЫДУЩЕМ ПРИМЕРЕ НЕ ТАК РАБОТАЕТ

//----------------------------
// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;//вот замененная

alert( rabbit.eats ); // true, он не найдет eats в rabbit и пойдет смотреть Rabbit - там eats: true;
//славааллаху правильно

//-------------------------------
// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;//замененная строка

alert( rabbit.eats ); //undefined, теперь даже в Rabbit это не найдется поэтому undefined
//алилуя правильно

//-------------------------------------------------------------------------------------------- ЗАДАЧА 2

// Создайте новый объект с помощью уже существующего
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
// мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

//пример функции-конструктора для obj, с которой корректно сработает

function MakeObj() {
  //с той, где стоит прототип по умолчанию и он не изменен, ну вот  такой:
  MakeObj.prototype = {
    constructor: MakeObj,
  }
}
let obj = new MakeObj();

//с которой не сработает - c той, где мы заменим prototype по умолчанию на другой объект

function MakeObj() {
  MakeObj.prototype = {
    isAdmin: true,//ну на любую другую хрень //дополнение из учебника - чтобы тут не было constructor, указывающего на MakeObj
  }
}
