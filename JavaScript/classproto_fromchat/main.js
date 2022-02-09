'use strict'

//-----------------------------------------------------------------------------------------------
// Задачи по прототипам:
//-----------------------------------------------------------------------------------------------

// - напишите своими словами что такое prototype и proto*******************

//prototype ([[Prototype]]) это свойство, указывающее на родительский объект, т.е. на то, от чего наш объект наследует свойства/методы
//_proto_ - один из способов задать прототип или получить его (геттер и сеттер)

//------------------------------------------------------------------------------------------------

//добавьте метод 'capitalize' для всех строк, пример использования:

'привет'.capitalize() // 'Привет'
'привет, как дела?'.capitalize() // 'Привет, как дела?' */

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1);
}

//------------------------------------------------------------------------------------------------
//Задачи по классам:
//-----------------------------------------------------------------------------------------------

// - необходимо реализовать класс калькулятора, калькулятор должен поддерживать операции для: 
// - сложения (sum)
// - умножения (multiply)
// - вычитания (substr)
// - деление (divide)

// так же у него должно быть свойство currentResult, которое возвращает текущее вычисленное значение, значений хранится в памяти до очистки через метод clear()


class Calculator {
  constructor() {
    this.value = 0;
  }

  setValue(x) {
    this.value = x; 
    return this.value;
  }
  

  sum(...args) {
    let res = this.value;

    for (let arg of args) {
      res = res + arg; 
    }
    this.value = res;
    return this.value;
  }

  multiply(...args) {
    let res;
    if (this.value) {
      res = this.value;
    } else {
      res = 1;//если нет установлено setValue и надо перемножить только аргументы
    }
    
    for (let arg of args) {
      res = res * arg; 
    }
    this.value = res;
    return this.value;
  }

  substr(...args) {
    let res = this.value; 
    for (let i = 0; i < args.length; i += 1) {
      res = res - args[i];
    }
    this.value = res;
    return this.value;
  }

  divide(...args) {
    let res = this.value;
    for (let i = 0; i < args.length; i += 1) {
      res = res / args[i];
    }
    this.value = res;
    return this.value;
  }

  get currentResult() {
    return this.value;
  }

  set currentResult(x) {
    throw new Error("нельзя менять result");
  }

  clear() {
    this.value = 0;
  }

  addMethod(name, func) {
    this[name] = func; 
  }

  toString() {
    return this.value;
  }

  valueOf() {
    return this.value;
  }
}

const calc = new Calculator();

calc.sum(1,3);
calc + 1 // '5'

alert(calc)

calc.setValue(2);
calc.multiply(3); // 6
calc.currentResult; // 6
calc.clear();

calc.setValue(3);
calc.multiply(2, 2); // 12 (количество чисел передаваемых в аргументах не ограничено для всех базовых методов)
calc.clear();

calc.setValue(3);
calc.sum(3, 2); // 8
calc.clear();


//-----------------------------------------------------------------------------------------------
// - необходимо создать калькулятор для инженеров, для этого нужно создать новый класс EngineeringCalculator, унаследовав базовые методы у класса Calculator, 
//в новом калькуляторе будут доступны все методы Calculator а так же:
// - синус (sin)
// - косинус (cos)
// - тангенс (tan)

// так же у класса будет свойство pi, которое будет возвращать число пи

class EngineeringCalculator extends Calculator {
  constructor() {
    super();
  }

  static pi = Math.PI;

  sin(x) {
    let result = Math.sin(x);
    this.value = result; 
    return this.value;
  }

  cos(x) {
    let result = Math.cos(x);
    this.value = result; 
    return this.value;
  }

  tan(x) {
    let result = Math.tan(x);
    this.value = result; 
    return this.value;
  }

  multiply() {
    super.multiply();
  }
}

const calc = new EngineeringCalculator();

calc.multiply(3, 2) // 6
calc.currentResult // 6
calc.clear();

calc.sin(3) // ~0.1411200080
calc.clear();

calc.sin(3) + calc.pi // ~3.2827126616
calc.clear()

//-----------------------------------------------------------------------------------------------

// - как сделать так, что бы можно было использовать методы EngineeringCalculator без объявления класса? например:
EngineeringCalculator.pi // ~3.14...
EngineeringCalculator.sin(3) // ~0.1411200080
EngineeringCalculator.multiply(3, 2) // 6

//сделать их статическими НЕ ДОПИЛЕН MULTIPLY. пока убран static у него в обычном калькуляторе


class EngineeringCalculator extends Calculator {
  constructor() {
    super();
  }

  static pi = Math.PI;

  static sin(x) {
    let result = Math.sin(x);
    this.value = result; 
    return this.value;
  }

  static cos(x) {
    let result = Math.cos(x);
    this.value = result; 
    return this.value;
  }

  static tan(x) {
    let result = Math.tan(x);
    this.value = result; 
    return this.value;
  }

  static multiply() {
    super.multiply();
  }
}

//-----------------------------------------------------------------------------------------------
// - сделайте так, что бы свойство currentResult у калькулятора нельзя было менять, т.е:
calc.multiply(3, 2) // 6
calc.currentResult // 6
calc.currentResult = 12 // Error: нельзя менять текущее значение

//это сделано

//-----------------------------------------------------------------------------------------------
// - повторение - мать учения! добавьте метод addMethod в класс Calculator, который позволит расширить методы калькулятора, пример:
calc.addMethod('max', (a, b) => a > b ? a : b)
calc.max(1, 2) // 2

//добавлено в calc

//-----------------------------------------------------------------------------------------------
// - сделайте так, что бы при приведении калькулятора к строке - возвращался текущий результат, либо '0', пример:
calc.sum(1,3);
alert(calc); // '4'
calc.clear();
alert(calc); // '0'

//добавлено в calc методом

//-----------------------------------------------------------------------------------------------
// - сделайте то же самое и для приведения к числу, т.е:
calc.sum(1,3);
calc + 1 // '5'

//добавлено в calc методом через прототип тоже можно

//остальное уже было сделано, см. ветка классы, папка codewars + ветка прототипы, папка codewars+arr methods