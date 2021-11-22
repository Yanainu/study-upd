'use strict'

//-----------------------------------------------------------------------------------------ЗАДАЧА 1

// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let uniques = new Set(values);//так будет объект уник. значений
    let resultArr = [];

    uniques.forEach((item, itemAgain, set) => {
        resultArr.push(item);
    })
    return resultArr; 
}

//вариант 2
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let uniques = new Set(values);//так будет объект уник. значений
    let resultArr = [];

    for (let value of uniques) {
        resultArr.push(value);
    }
    return resultArr; 
}

// а надо было вот так, я забыла про array from
function unique(arr) {
    return Array.from(new Set(arr));
}

//-----------------------------------------------------------------------------------------ЗАДАЧА 2 // САМА Я ПРИДУМАЛА ТОЛЬКО ДО MAP потом пришлось смотреть 

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
    //можно из каждого элемента сделать массив, чтобы отсортировать буквы по одному порядку и потом set отсеет совпадения
    //дальше я делала через set но в результат складывались не слова а отсортированные наборы, посмотрела в решение т.к. еще не очень шарю в ПРИМЕНЕНИИ мапа
    let map = new Map();
        //проходим по исходному массиву
    for (let item of arr) {
        //делаем каждый элемент отсортированным
        let sortedItem = item.toLowerCase().split('').sort().join('');
        //добавляем его в новый мап чтобы ключом было отсортированное слово, значением - исходное.
        //вот тут я не додумалась  до того, что при добавлении нового слова с тем же ключом будет перезапись происходить
        //и поэтому повторов не будет после цикла. пиздец подбор задач конечно, так не учат.
        map.set(sortedItem, item);
    }
    //делаем массив из значений
    return Array.from(map.values());
    
}

//попытка закрепить - то же самое только с обычным объектом и обычным циклом
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclearObj(arr) {
    let objForSorts = {}; 
    for (let i = 0; i < arr.length; i++) {
        let sortedItem = arr[i].toLowerCase().split('').sort().join('');
        objForSorts[sortedItem] = arr[i];
    }
    return Object.values(objForSorts);
}

//-----------------------------------------------------------------------------------------ЗАДАЧА 3 

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

//предположение - пуш это метод массива, а keys это объект с ключом name  и все
//например если сделать это массивом - заработает

let keys = Array.from(map.keys()); 
keys.push('age')//['name', 'age']