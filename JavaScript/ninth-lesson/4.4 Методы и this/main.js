'use strict'

////////////////////////////// ЗАДАЧА 1

// Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

//(user.go)() // будет ошибка пушто нет точки с запятой после объекта но я пока неебу почему.


////////////////////////// ЗАДАЧА 2

// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// let obj, method; //ЭТО ПЕРЕМЕННАЯ ИЛИ ЧТО МЕТОД ВОТ ЭТОТ

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object] //ну тут все логично - this это сам obj,в алерт летит объект(не поняла почему именно в таком виде)

// (obj.go)();             // (2) [object Object] //он работает правильно пушто есть ; после объекта иначе была бы ошибка
// //на кой тут эти первые скобки то??????????

// (method = obj.go)();    // (3) undefined //тут мы в переменную method складываем метод go, т.е. метод становится ссылкой на этот метод гоу
// //больше мне пока нечего сказать

// (obj.go || obj.stop)(); // (4) undefined //метода стоп не существует, там будет undefined, но почему не вывел гоу если или должен
// //вернуть первое истинное значение а это obj.go... сука я не понимаю ничего


//ЧЕТ Я В ЦЕЛОМ НЕ ОДУПЛЯЮ ЧТО ТУТ ПРОИСХОДИТ

/////////////// КАЛЬКУЛЯТОР

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
  read() {
    this.a = +prompt('Введите первое значение');
    this.b = +prompt('Введите второе значение');
  },

  sum() {
    return (this.a + this.b);
  },

  mul() {
    return (this.a * this.b);
  },
};

//////////////// ЛЕСТНИЦА 
//Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); 