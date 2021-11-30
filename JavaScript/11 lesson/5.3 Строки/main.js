'use strict'

//////////////////////////////ЗАДАЧА 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

function ucFirst(str) {
    let result = str[0].toLocaleUpperCase() + str.slice(1);
    return result;
}

//-----------------------------------------------------------------------------------------ЗАДАЧА 2

// Напишите функцию checkSpam(str), возвращающую true, 
//если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//ИСПРАВЛЕНО
//что такое check1 и check2? скинь потом корректное решение

function checkSpam(str) {
    str = str.toLocaleLowerCase();

    let check1 = 'viagra';
    let check2 = 'xxx';

    if (str.includes(check1) || str.includes(check2)) {
        return true;
    } else {
        return false;
    }
}



//-----------------------------------------------------------------------------------------ЗАДАЧА 3

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, 
// чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, 
// либо, если необходимо, усечённая строка.

// Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"

// //ИСПРАВЛЕНО:
// должен быть return, не console.log
// else тут не нужен, если внутри if будет return

function truncate(sentence, maxlengh) {
    if (sentence.length > maxlength) {
        const sentenceCropped = sentence.slice(0, maxlength - 1) + '...';
        return sentenceCropped;
    } 

    return sentence;
}

//////////////////////////////ЗАДАЧА 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
// числовое значение и возвращать его.

// Например:

alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(string) {
    return string = parseFloat(string.slice(1));//так отсечется начальный знак валюты + если потом будут символы их парс уберет
}
//ну в учебнике просто отсекли первый. ладно