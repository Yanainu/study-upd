'use strict'

//------------------------------------------------------------------ЗАДАЧА 1 Вот документ с таблицей и формой.

// Как найти?…
//https://learn.javascript.ru/task/find-elements/table.html вид html

// Таблицу с id="age-table".
document.getElementById('age-table');

// Все элементы label внутри этой таблицы (их три).
document.querySelectorAll('label')

// Первый td в этой таблице (со словом «Age»).
document.querySelector('td')//он найдет как раз первый

// Форму form с именем name="search".
document.querySelector('form name="search"')// правильное написание('form[name="search"]')

// Первый input в этой форме.
document.querySelector('form > input')

// Последний input в этой форме.
document.querySelector('form > input:last-child')

//с решением учебника естественно мало что совпало
//РЕШЕНИЕ УЧЕБНИКА:

// 1. Таблица с `id="age-table"`.
let table = document.getElementById('age-table')

// 2. Все label в этой таблице
table.getElementsByTagName('label')
// или
document.querySelectorAll('#age-table label')

// 3. Первый td в этой таблице
table.rows[0].cells[0]
// или
table.getElementsByTagName('td')[0]
// или
table.querySelector('td')

// 4. Форма с name="search"
// предполагаем, что есть только один элемент с таким name в документе
let form = document.getElementsByName('search')[0]
// или, именно форма:
document.querySelector('form[name="search"]')

// 5. Первый input в этой форме
form.getElementsByTagName('input')[0]
// или
form.querySelector('input')

// 6. Последний input в этой форме
let inputs = form.querySelectorAll('input') // найти все input
inputs[inputs.length-1] // взять последний
