'use strict'

//-----------------------------------------------------------------------------------------------ЗАДАЧА 1 

// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

//ОТВЕТЫ
alert( rabbit.jumps ); // тут будет true, т.к. у rabbit есть свой jumps и не надо больше никуда ходить
delete rabbit.jumps;
alert( rabbit.jumps ); // теперь будет null, т.к. удалили jumps из rabbit и теперь за ним надо идти в прототип - animal
delete animal.jumps;
alert( rabbit.jumps ); // теперь undefined т.к. его больше нигде нет

//-----------------------------------------------------------------------------------------------ЗАДАЧА 2

// Задача состоит из двух частей.
// У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// С помощью свойства __proto__ задайте прототипы так, 
// чтобы поиск любого свойства выполнялся по следующему пути: 
// pockets → bed → table → head. 
// Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

//РЕШЕНИЕ

pockets.__proto__ = bed; 
bed.__proto__ = table;
table.__proto__ = glasses;

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
// При необходимости составьте цепочки поиска и сравните их.
//цепочка через pockets.glasses - 1) поиск в pockets/нету 2) в bed нету, в table нету 3)в head есть
//через head.glasses 
//я думала быстрее второй но учебник сказал что вообще пофиг 

//-----------------------------------------------------------------------------------------------ЗАДАЧА 3

// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();//свойство получит rabbit т.к. тут this применяется к текущему объекту а не прототипу. к тому что до точки

//-----------------------------------------------------------------------------------------------ЗАДАЧА 4

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

//РЕШЕНИЕ

//ПОЧЕМУ НАЕДАЮТСЯ ОБА - потому что цепочка такая
//мы вызвали eat для speedy, у speedy нет собственного eat, вызовется из прототипа hamster
//stomach у speedy тоже отсутствует, тоже берется из прототипа и в итоге apple складывается в stomach в прототипе
//поэтому когда мы вызываем его через lazy - попадем в прототип и берется тот же самый stomach, куда лег apple

//ИСПРАВЛЕНИЕ

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],//добавить каждому хомяку отдельный stomach
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

//тогда будет 
speedy.eat('apple for speedy');
speedy.stomach; // содержит apple for speedy
lazy.eat('apple for lazy');
lazy.stomach; //содержит только apple for lazy