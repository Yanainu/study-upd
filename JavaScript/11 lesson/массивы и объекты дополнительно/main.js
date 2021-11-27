'use strict'


//----------------------------------------------------------------------------------------------------------

// - запилить функцию, которая сравнивает 2 массива, и возвращает true если они одинаковые, и false если нет

//ИСПРАВЛЕНО используй всегда строгое сравнение
//кое-где есть ошибка, compareArrays([1, 2, 3], [1, 2, 4]) вернет true
//ошибка была в том, что я сначала прерывала цикл а потом делала result = false. теперь наоборот

function compareArrays(arr1, arr2) {
    let result = true;
    //можно сразу чекнуть одна ли у них длина, тогда в цикле будет пофиг на длину какого массива я ориентирую i
    if (!(arr1.length === arr2.length)) {
        result = false;
    }

    for (let i = 0; i < arr1.length; i += 1) {

        if (arr1[i] === arr2[i]) {
            continue;

        } else {
            result = false;
            break; 
            
        }
    }

    return result;
}

//для теста 
const arr1 = ['lol', 'kek', 'cheburek'];
const arr2 = ['lol', 'kek', 'cheburek'];
const arr3 = ['eren', 'yeaga'];

compareArrays([1, 2, 3], [1, 2, 4])

//----------------------------------------------------------------------------------------------------------
// - написать функцию, которая проверяет является ли переданное значение объектом, 
// при решении проверьте со всеми возможными типами - массив/null и прочее, возвращать true функция должна только для объектов

//ИСПРАВЛЕНО 
// если у тебя где-то булевый результат, то пиши вместо Array.isArray(x) == false просто Array.isArray(x) (молчу что тут снова не строгое сравнение)
// написала с ! т.к. мне же надо false а не true

function isObject(x) {
    if (typeof(x) === 'object' && !(Array.isArray(x)) && x != null) {
        return true;
    } else {
        return false;
    }
    
}//только при объекте и Math возвращает true, но Math это ж встроенный объект значит все верно

//-----------------------------------------------------------------------------------------------------

// - реализовать функцию, которая сравнивает 2 объекта без вложенных конструкций


// решение не подходит, что если я хочу сравнить
let a = {
    'ka': 2,
    'pep': 1
}

let b = {
    'pep': 1,
    'ka': 2
}
// ПОКА НЕ МОГУ НИЧЕГО ПРИДУМАТЬ ВООБЩЕ (((((((((((((((((((((((((((((((((((((((((((9

function compareEasyObj(obj1, obj2) {
    let result;

    let strFromObj1 = Object.entries(obj1).join();
    console.log(strFromObj1)
    let strFromObj2 = Object.entries(obj2).join();
    console.log(strFromObj2)

    if (strFromObj1 === strFromObj2) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

//объекты для проверок
const obj1 = {
    name: 'Levi',
    age: 30,
}

const obj2 = {
    name: 'Levi',
    age: 30,
}

const obj3 = {
    name: 'Levi',
    age: 30,
    height: 160,
}

const obj4 = {
    name: 'Erwin',
}

//----------------------------------------------------------------------------------------------------------РАЗОБРАТЬ НА ЗАНЯТИИ

// - реализовать функцию, которая сравнивает 2 обхъекта, в котором могут быть вложенные массивы/объекты

//это вроде сработает только на один уровень вложенности но тем не менее...

function compareComplicatedObj(obj1, obj2) {
    let result;
    //ключи все равно будут простые, можно сравнить ключи
    let obj1Keys = Object.keys(obj1).join();
    let obj2Keys = Object.keys(obj2).join();

    //если они равны - тогда уже сравнивать значения, но по одному  
    if (obj1Keys === obj2Keys) {
        console.log('совпали ключи')

        for (let key in obj1) {
            //проверка элемент - это объект, массив или примитив
            console.log('итерация пошла')
            //если массив
            if (Array.isArray(obj1[key])) {
                console.log('массив обнаружен')
                if (obj1[key].join() === obj2[key].join()) {
                    result = true;
                } else {
                    result = false
                }

            ////если объект - можно сравнить предыдущим заданием
            } else if (typeof(obj1[key]) === 'object' && Array.isArray(obj1[key]) == false && obj1[key] != null) {
                console.log('объект обнаружен')
                let str1 = Object.entries(obj1[key]).join();
                let str2 = Object.entries(obj2[key]).join();
            
                if (str1 === str2) {
                    result = true;
                } else {
                    result = false;
                }
            //если не массив и не объект - сравниваем примитивы И ВОТ ТУТ ЛАГ ПРОИСХОДИТ
            } else {
                console.log('сравнение примитивов')
            
                if (obj1.key === obj2.key) {//он здесь признает равными неравные свойства яхз почему, делаю другой пример в консоли и все верно работает
                    console.log('примитивы равны')
                    result = true;
                } else {
                    console.log('примитивы не равны')
                    result = false;
                }
            }

        }
    } else {
        result = false;
    }
    return result;
}

//объекты для проверок
const person1 = {
    name: 'Levi',
    age: 30,
    height: 160,
    colleagues: ['Erwin', 'Hanji'],
    head: {
        name: 'Erwin',
        age: 35,
    }
}

const person2 = {
    name: 'Levi',
    age: 30,
    height: 160,
    colleagues: ['Erwin', 'Hanji'],
    head: {
        name: 'Erwin',
        age: 35,
    }
}

const person3 = {
    name: 'Eren',
    age: 20,
    height: 170,
    colleagues: ['Erwin', 'Hanji'],
    head: {
        name: 'Erwin',
        age: 35,
    }
}

const person4 = {
    name: 'Sasha',
    age: 20,
    height: 170,
}

const person5 = {
    name: 'Sasha',
    age: 20,
    height: 170,
}
