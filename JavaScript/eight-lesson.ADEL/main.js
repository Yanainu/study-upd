'use strict'
// //Нужно определить, является ли строка, поданная на вход через prompt, 
// палиндромом. Если да, то вывести через alert слово "ПАЛИНДРОМ", 
// если нет - вывести "НУ ТЫ И НЕУДАЧНИК"

// // Палиндром - это слово, которое читается в обе стороны одинаково. 
// Например: "довод", "казак".

// // Важно: мы можем ходить по строке в цикле так же, как по массиву, 
// обращаясь отдельно к каждому символу по индексу. Пример на прикрепленном фото.

// // Если не знаете, с чего начать, или на каком-то этапе проблема - 
// пишите мне, не гуглите, плз)
// // Задачу можно решить, используя только уже полученные вами знания

// // P.S. Палиндромами называются еще и предложения, 
// которые читаются в обе стороны одинаково, но вам их рассматривать не нужно

 //word[word.length/2 - 1] //это место где буква может быть любая

function checkPalindrom() {
    let word = prompt('Введи слово');
    let indexForStart = 0;
    let indexForEnd = 1;
    let result = 'Палиндром';

    while (indexForStart < (word.length / 2 - 1)) {
        if (word[indexForStart] !== word[word.length - indexForEnd]) {
            result = false;
            break;
        } else {
            indexForStart += 1;
            indexForEnd += 1;
            result = true;
        }  
    }
   
    if (result === true) {
        alert('ПАЛИНДРОМ');
    } else {
        alert('НУ ТЫ И НЕУДАЧНИК');
    }
}

//update

//let word;

function isPalindrom(word) {
    let indexForStart = 0;
    let indexForEnd = 1;

    let result = 'Палиндром';

    while (indexForStart < (word.length / 2 - 1)) {
        if (word[indexForStart] !== word[word.length - indexForEnd]) {
            result = 'Не палиндром';
            break;
        } else {
            indexForStart += 1;
            indexForEnd += 1;
        }  
    }
    alert(result);
}

//от Адель
// const testWord = prompt('введите слово');

// function isPalindrom(word) {
//     let indexForStart = 0;
//     let indexForEnd = 1;

//     let result = 'Палиндром';

//     while (indexForStart < (word.length / 2 - 1)) {
//         if (word[indexForStart] !== word[word.length - indexForEnd]) {
//             result = 'Не палиндром';
//             break;
//         } else {
//             indexForStart += 1;
//             indexForEnd += 1;
//         }  
//     }

//     return result;
// }

// const answer = isPalindrom(testWord);
// alert(answer);

