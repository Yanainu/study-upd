'use strict'

//Задачи по массивам:

// //- Объединить 2 массива: ['a', 'b', 'c'] и [1, 2, 3]
// const letters = ['a', 'b', 'c'];
// const numbers = [1, 2, 3];

// letters.concat(numbers);

// //эт если надо было бы сделать ['a', 'b', 'c', '1', '2', '3']
// const numbersToStr = numbers.map((item) => item.toString())
// const concated = letters.concat(numbersToStr);

// //concated = ['a', 'b', 'c', '1', '2', '3']

// //----------------------------------------------------------------------------------------------------------

// // - Добавить в массив ['a', 'b', 'c'] буквы 'd', 'e', 'f', (они лежат не в массиве),  2 вариант - добавьте буквы в начало массива
// const letters = ['a', 'b', 'c'];
// letters.push('d', 'e', 'f');
// //теперь letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// //если добавлять в начало:
// const letters = ['a', 'b', 'c'];
// letters.unshift('d', 'e', 'f');

// //----------------------------------------------------------------------------------------------------------

// // - Превратить массив [1, 2, 3] в [3, 2, 1]
// const numbers = [1, 2, 3];
// numbers.sort((a, b) => b - a)

// //----------------------------------------------------------------------------------------------------------

// // - Отсортировать массив [1, 2, 235, 2345356, 3, 2] по возрастанию и по убыванию

// const arr = [1, 2, 235, 2345356, 3, 2];
// //по возрастанию
// arr.sort((a, b) => a - b)
// //по убыванию
// arr.sort((a, b) => b - a)

// //----------------------------------------------------------------------------------------------------------

// - Дан массив [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345] необходимо удалить повторяющиеся элементы в массиве

//ИСПРАВЛЕНО как бы ты сделала с помощью Set?
//вот так

const arr = [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345];

const clearedSet = new Set();

arr.forEach(item => {
    clearedSet.add(item);
    return clearedSet;
});

const clearedArray = Array.from(clearedSet.values());//[1, 234, 2345, 234523, 2, 453, 345]


//----------------------------------------------------------------------------------------------------------

// - Дан массив [3, 345, 234, 3452, 2236, 13] необходимо объединить его с массивом 
//[345, 234, 2345, 12, 45, 1, 3] без дублирования элементов


//ИСПРАВЛЕНО тот же вопрос -  как бы ты сделала с помощью Set?

const arr1 = [3, 345, 234, 3452, 2236, 13];
const arr2 = [345, 234, 2345, 12, 45, 1, 3];

const set = new Set(arr1);

arr2.forEach(item => {
    set.add(item);
})

const result = Array.from(set.values()); //[3, 345, 234, 3452, 2236, 13, 2345, 12, 45, 1]


// //----------------------------------------------------------------------------------------------------------

// // - Дан массив [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'] необходимо вывести самый "популярный" элемент массива

// arr = [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'];

// let counters = {};

// arr.forEach((item) => {
//     if (counters[item]) {
//         counters[item] += 1;
//     } else {
//         counters[item] = 1;
//     }
    
// })

// let sortedArray = Object.keys(counters).sort((a, b) => {
//     return counters[b] - counters[a];
// })

// console.log(sortedArray[0]) //a


 

// //----------------------------------------------------------------------------------------------------------

// // - Сделать из строки "Не грози южному централу попивая сок у себя в квартале" массив из первых букв т.е. ['Н', 'г', 'ю', 'ц', 'п', 'с', 'у', 'с', 'в', 'к']

// const str = "Не грози южному централу попивая сок у себя в квартале";

// const splitted = str.split(' ');//['Не', 'грози', 'южному', 'централу', 'попивая', 'сок', 'у', 'себя', 'в', 'квартале']

// const resultArr = splitted.map(item => item[0]) //['Н', 'г', 'ю', 'ц', 'п', 'с', 'у', 'с', 'в', 'к']

// //----------------------------------------------------------------------------------------------------------

// - Написать свою реализацию методов:

//     - filter РЕШЕНИЕ НЕ РАБОЧЕЕ

function filter(arr, func) {
    let resultArr = [];
    for (i = 0; i < arr.length; i++) {
        if (func) {//типа если func вернет true
            newArr.push(arr[i]) //то добавляем элемент в массив-результат
        }
    }
    return resultArr;
}

//     - find РЕШЕНИЕ НЕ РАБОЧЕЕ

function find(arr, func) {
    let resultItem;
    if (func) {
        resultItem = array[i];
    }
    return resultItem;
}

//     - concat

//если мы хотим дополнить исходный массив
function concat(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}

//ИСПРАВЛЕНИЕ - КАК СДЕЛАТЬ ТАК ЧТОБЫ ARR1 НЕ МУТИРОВАЛСЯ
function concat(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

//     - includes ИСПРАВЛЕНИЕ - если мы нашли элемент, зачем продолжать цикл?
//добавлена метка на прерывание цикла, как только нашли

function includes(array, item, from) {
    let result = false;//по умолчанию false, если не найдет item 
    outer: for (let i = from; i < array.length; i++) {
        if (array[i] === item) {
            result = true;
            break outer;
        }
    }
    return result;
}
//     - sort не могу написат пока 

////     - filter ИСПРАВЛЕНО (не было вызова функции func, было просто if(func))

function filter(arr, func) {
    let resultArr = [];
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i])) {//типа если func вернет true для конкретного элемента
            resultArr.push(arr[i]) //то добавляем элемент в массив-результат
        }
    }
    return resultArr;
}

//     - find ИСПРАВЛЕНО

function find(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

//для проверок filter & find
filter([1, 2, 3, 4, 4, 5, 7, 10], (item) => {
    return item > 4;
})

find([{name: 'Петя'}, {name: 'Вася'}], (item) => {
    return item.name === 'Петя';
})