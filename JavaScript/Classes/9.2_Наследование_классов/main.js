'use strict'

//-----------------------------------------------------------------------------------------------ЗАДАЧА 1

// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);

// решение - при создании Rabbit забыли в конструкторе super написать

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);//вот
    this.created = Date.now();
  }
}

// let rabbit = new Rabbit("Белый кролик"); // Белый кролик
alert(rabbit.name);

//-----------------------------------------------------------------------------------------------ЗАДАЧА 2

// У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». 
//Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

//можно без отдельного файла пожалуйста. вот решение

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    this.precision = options.precision || 1000;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let test = new ExtendedClock({template: 'h:m:s'})
test.start()