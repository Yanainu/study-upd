'use strict'

//----------------------------------------------------------------------------------------------------------

// дополнительные задания по массивам и объектам:
// - нужно запилить функцию, которая вернет массив той длины, и с тем содержимым что мы передадим, т.е.:

const res = createArray(4, '123');

res // ['123', '123', '123', '123'];

function createArray(lenght, item) {
    let result = [];
    for (i = 1; i <= lenght; i += 1) {
        result.push(item)    
    }
    return result;    
}

//----------------------------------------------------------------------------------------------------------

// - запилить функцию, которая сравнивает 2 массива, и возвращает true если они одинаковые, и false если нет

function compareArrays(arr1, arr2) {
    let result = true;
    //можно сразу чекнуть одна ли у них длина, тогда в цикле будет пофиг на длину какого массива я ориентирую i
    if (arr1.length != arr2.length) {
        result = false;
    }

    for (let i = 0; i < arr1.lenght; i++) {
        if (array1[i] === array2[i]) {
            continue;
        } else {
            break; 
            result = false;
        }
    }

    return result;
}

//для теста 
const arr1 = ['lol', 'kek', 'cheburek'];
const arr2 = ['lol', 'kek', 'cheburek'];
const arr3 = ['eren', 'yeaga'];

//----------------------------------------------------------------------------------------------------------
// - написать функцию, которая проверяет является ли переданное значение объектом, 
// при решении проверьте со всеми возможными типами - массив/null и прочее, возвращать true функция должна только для объектов

function isObject(x) {
    if (typeof(x) === 'object' && Array.isArray(x) == false && x != null) {
        return true;
    } else {
        return false;
    }
    
}//только при объекте и Math возвращает true, но Math это ж встроенный объект значит все верно

//----------------------------------------------------------------------------------------------------------

// - реализовать функцию, которая превращает объект в массив значений:
const obj = {
    'pep': 1,
    'ka': 2
}

// const res = makeArrayFromObject(obj);

// res // [['pep', 1], ['ka', 2]]

//вариант 1 

function makeArrayFromObject(obj) {
    const res = Object.entries(obj);
    return res;
}


//вариант2 [['pep', 1], ['ka', 2]]

function makeArrayFromObject(obj) {
    const res = []
    for (let key in obj) {
        const arr = [key, obj[key]];
        res.push(arr);
    }
    return res;
}

//----------------------------------------------------------------------------------------------------------

// - реализовать функцию, которая сравнивает 2 объекта без вложенных конструкций

function compareEasyObj(obj1, obj2) {
    let result;

    let strFromObj1 = Object.entries(obj1).join();
    let strFromObj2 = Object.entries(obj2).join();

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

//----------------------------------------------------------------------------------------------------------

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

//задача с тимофеем


// 1) 0 1 4 9 0 => в результате должно быть 0 1 2 1 0
// 2) 0 7 9 4 8 20 => в результате должно быть 0 1 2 3 4 5
// 3) 0 0 4 0 6 7 0 => в результате должно быть 0 0 1 0 1 1 0



//3
const street1 = [0, 1, 4, 9, 0];
const street2 = [0, 7, 9, 4, 8, 20];
const street3 = [0, 0, 4, 0, 6, 7, 0];

function test(arr) {

    let resultArr = [];

    //общий цикл
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            resultArr.push(0);
            continue;
        } else if (arr[i] != 0) {
            
            let tillLeftZero;//расстояние до  нуля слева
            let tillRightZero;//расстояние до  нуля справа

            let leftPartOfArr = arr.slice(0, i); //отделяем левый кусок массива для поиска нуля
            let rightPartOfArr = arr.slice(i + 1, arr.length - 1); //отделяем правый кусок массива для поиска нуля

            //цикл в левую сторону массива для поиска нуля

            outer1: for (let x = i - 1/*начинаем сравнивать с предыдущим элементом*/; x < leftPartOfArr.length;/*берем левую часть массива*/ x--) {

                if (arr[x] === 0) {//если нашелся ноль
                    ////вычисляем индекс нуля слева и вычитаем его из i - получаем расстояние до ближайшего нуля слева
                    tillLeftZero = i - x;
                    break outer1;//и прерываем этот цикл, дальше влево идти не надо
                } else {//если не ноль
                    continue outer1;//идем на следующую итерацию
                }
            }

            //если ноль слева так и не нашелся
            if (tillLeftZero === undefined) {
                //то вместо расстояния до левого нуля будет расстояние до начала массива
                tillLeftZero = arr.length;
            }
            
            //цикл в правую сторону массива для поиска нуля

            outer2: for (let y = i + 1/*начинаем сравнивать со след. элементом*/; y < arr.length;/*берем правую часть массива*/ y++) {

                if (arr[y] === 0) {//если ноль - 
                    //вычисляем индекс нуля справа и вычитаем из него текущий i - получаем расстояние до ближайшего нуля
                    tillRightZero = y - i;
                    break outer2;//и дальше не ищем
                } else {
                    continue outer2;
                }                
            }


            //если ноль справа не найден
            if (tillRightZero === undefined) {
                //то вместо расстояния до правого нуля будет расстояние до конца массива
                tillRightZero = arr.length;
            }

            //сравниваем найденные индексы, если левый
            if (tillLeftZero < tillRightZero) {
                resultArr.push(tillLeftZero);
            } else {
                resultArr.push(tillRightZero);
            }
        }
    }
    return resultArr;
}
