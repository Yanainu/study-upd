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




const str = prompt('введите предложение').toLowerCase(); //делаем все с маленькой буквы;

function isPalindromSentence() {
    
    let result = 'Палиндром'; //по умолчанию

    let indexForStart = 0;
    let indexForEnd = str.length - 1;

    // ЦИКЛ


    while (str) {
        if (((/[a-zA-Z]/).test(str[indexForStart])) !== true) {//если слева не буква
            indexForStart += 1;
        } else if (((/[a-zA-Z]/).test(str[indexForEnd])) !== true) {
            indexForEnd -= 1;
        } else {
            if ((str[indexForStart] === str[indexForEnd])) {
                indexForStart += 1;
                indexForEnd -= 1;
            } else {
                result = 'НЕ палиндром';
                break;
            }
        }

        //сравнение буков

        
    } 

    alert(result);
}
isPalindromSentence()