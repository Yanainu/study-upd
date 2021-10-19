'use strict' 

//(/[a-zA-Z]/).test(элемент строки по индексу)

//     запускаешь цикл, 
// на каждой итерации цикла делаешь две отдельные проверки (два отдельных блока иф):
// 1) если слева не буква - увеличиваю левый индекс пока не увижу букву

// 2) если справа не буква - уменьшаю правый индекс пока не увижу букву

// дальше просто делаешь обычное сравнение str[leftIdx] и str[rightIdx]
// const str = prompt('введите предложение').toLowerCase(); //делаем все с маленькой буквы;

// function isPalindromSentence() {
    
//     let result = 'Палиндром'; //по умолчанию

//     let indexForStart = 0;
//     let indexForEnd = str.length - 1;

//     // ЦИКЛ 

    // while (str) {
    //     if ((/[a-zA-Z]/).test(str[indexForStart]) === false) {//если слева не буква
    //         indexForStart += 1;
    //     }

    //     if ((/[a-zA-Z]/).test(str[indexForEnd]) === false) { //если справа не буква
    //         indexForEnd -= 1;
    //     }

    //     //сравнение буков
    //     if ((str[indexForStart] === str[indexForEnd])) {
    //         indexForStart += 1;
    //         indexForEnd -= 1;
    //     } else {
    //         result = 'НЕ палиндром';
    //         break;
    //     }
    // } 

//     alert(result);
// }
// isPalindromSentence()


//const str = prompt('введите предложение').toLowerCase(); //делаем все с маленькой буквы;

// function isPalindromSentence() {
    
//     let result = 'Палиндром'; //по умолчанию

//     let indexForStart = 0;
//     let indexForEnd = str.length - 1;

//     // ЦИКЛ
//     while (str) {
//         if (((/[a-zA-Z]/).test(str[indexForStart])) !== true) {//если слева не буква
//             indexForStart += 1;
//         } else if (((/[a-zA-Z]/).test(str[indexForEnd])) !== true) {//если справа не буква
//             indexForEnd -= 1;
//         } else {//если уже обе буквы
//             if ((str[indexForStart] === str[indexForEnd])) {
//                 indexForStart += 1;
//                 indexForEnd -= 1;
//             } else {
//                 result = 'НЕ палиндром';
//                 break;
//             }
//         }
        
//     } 

//     alert(result);
// }

//решение 

const str = prompt('введите предложение').toLowerCase();
 
function isPalindromSentence(str) {
    
    let result = 'Палиндром';
 
    let left = 0;
    let right = str.length - 1;
 
    while (right >= left) {
        if (!(/[a-zA-Zа-яА-Я]/).test(str[left])) {
            left += 1;
            continue;
        }
        if (!(/[a-zA-Z]/).test(str[right])) {
            right -= 1;
            continue;
        } 

        if ((str[left] === str[right])) {
            left += 1;
            right -= 1;
        } else {
            result = 'НЕ палиндром';
            break;
        }

    }

    alert(result)
}
isPalindromSentence(str)