'use strict'
// Необходимо запросить через prompt имя, 
// никнейм и возраст пользователя, и вывести эти значения в консоль (через console.log) 
// в виде Вас зовут Петя, ваш никнейм assdestroyer16, вам 5 лет

let userName = prompt('Введите имя');
let userNickname = prompt('Введите никнейм');
let userAge = prompt('Введите возраст');

//через консоль

console.log(`Вас зовут ${userName}, ваш никнейм ${userNickname}, вам ${userAge} лет`);

//через алерт

alert(`Вас зовут ${userName}, ваш никнейм ${userNickname}, вам ${userAge} лет`);