'use strict'
// Напишите функцию camelize(str), которая преобразует 
// строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку 
//на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(string) {
    const splittedArray = string.split('');
    //тут мы удаляем тире и следующий за ним элемент и заменяем их на заглавную версию след. элемента
    splittedArray.splice(splittedArray.indexOf('-'), 2, splittedArray[splittedArray.indexOf('-')+1].toUpperCase());

    let stringUpdated = splittedArray.join('');
    console.log(stringUpdated);
}

//ИСПРАВЛЕНО (другое решение)
// задача в принципе решена (за исключением того что снова должен быть return а не console.log), 
// но как можно было бы ее решить используя методы массивов? подсказка - используй split('-'), и метод map

function camelize(string) {

    const splittedArray = string.split('-');

    const resultArray = splittedArray.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    })

    const resultString = resultArray.join('');
    return resultString;
}

//------------------------------------------------------------------------------- ЗАДАЧА 2

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let filtered = [] //массив для результата
    //перебираем каждый элемент и проверяем входит ли оно в диапазон
    arr.forEach(item => {
        if (item >= a && item <= b) {
            filtered.push(item)
        } 
    });

    return filtered;
}

//проверка как в учебнике
let filtered1 = filterRange(arr, 1, 4);
alert(filtered1); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)

//ИСПРАВЛЕНО 
// все ок, но как бы ты решила задачу с помощью метода filter?
//РЕШЕНИЕ С ФИЛЬТРОМ

function filterRange (arr, a, b) {
    filtered = arr.filter(item => item >= a && item <= b)
    return filtered;
}


//------------------------------------------------------------------------------- ЗАДАЧА 3

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и 
// удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]

//аргументы иначе обозвала чтобы от задачи2 отличалось
//вариант просто чтобы работало:

function filterRangeInPlace(array, x, y) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < x || array[i] > y) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
}


//------------------------------------------------------------------------------- ЗАДАЧА 4

//сортировать массив по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

arr.sort( (a, b) => b - a );

alert( arr ); // 8, 5, 2, 1, -10


//------------------------------------------------------------------------------- ЗАДАЧА 5

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

//решение
function copySorted(arr) {
    let arrCopy = arr.concat()
    return arrCopy.sort()
}

//------------------------------------------------------------------------------- ЗАДАЧА 6

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
//  в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

function Calculator() {

    this.library = {
        '+': (...arg) => {
            return this.sum(...arg)
        },
        '-': (...arg) => {
            return this.substraction(...arg)
        }
    }

    this.sum = function (a, b) {
        return Number(a) + Number(b);
    }

    this.substraction = function (a, b) {
        return Number(a) - Number(b);
    }

    this.calculate = function (string) {//принимаем строку str
        //делаем из нее массив
        const array = str.split(' ');//['3', '+', '7']
       
        const a = array[0];
        const b = array[2];

        const method = array[1];

        return this.library[method](a, b);
    
    }

    // Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
    this.addMethod = function (method, func) {
        this[method] = func;
    }
}

// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//------------------------------------------------------------------------------- ЗАДАЧА 7 

// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)/* ... ваш код */

alert( names ); // Вася, Петя, Маша

//-------------------------------------------------------------------------------ЗАДАЧА 8

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

// Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
    return {
        fullname: `${item.name} ${item.surname}`,
        id: item.id,
    }
})

console.log(usersMapped)

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]


//------------------------------------------------------------------------------- ЗАДАЧА 9

//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// теперь: [vasya, masha, petya]

//------------------------------------------------------------------------------- ЗАДАЧА 10

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. 
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], 
// или [3,1,2] и т.д., с равной вероятностью каждого случая.


//решение

//рандом применять к индексам массива т.е. 0 1 2

function shuffle(array) {
    

    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.round(random(0, array.length - 1))
        
        const a = array[i];

        array[i] = array[randomIndex];
        array[randomIndex] = a;
    

    }
    return array;
}

function random(min, max) {
    return min + Math.random() * (max - min);
}


//работает все

//------------------------------------------------------------------------------- ЗАДАЧА 11

// Напишите функцию getAverageAge(users), которая принимает массив объектов 
// со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//решение
function getAverageAge(arr) {
    let ageSum = arr.reduce((acc, item) => {
        acc += item.age;
        return acc;
    }, 0)

    return averageAge = ageSum / arr.length;
}

//------------------------------------------------------------------------------- ЗАДАЧА 12

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

//ИСПРАВЛЕНО
//можно использовать вариант проверки if(!uniqueArr.includes(item))

function unique(arr) {

    let uniqueArr = [];
    
    arr.forEach((item) => {
        if (!(uniqueArr.includes(item))) {
            uniqueArr.push(item);
        }
    })

    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O