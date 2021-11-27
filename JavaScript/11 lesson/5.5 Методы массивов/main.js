'use strict'

//------------------------------------------------------------------------------- ЗАДАЧА 1

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


//нихера не работает

//ИСПРАВЛЕНО уже не вспомню что было не так, РАБОТАЕТ ))0 


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



