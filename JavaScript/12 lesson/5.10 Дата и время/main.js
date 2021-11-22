'use strict'

//-------------------------------------------------------------------------------------------ЗАДАЧА 1

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3, 12)
alert(date)

//-------------------------------------------------------------------------------------------ЗАДАЧА 2

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let result; 
    switch (date.getDay()) {
        case 1: 
            result = 'ПН' 
            break;
        case 2: 
            result = 'ВТ' 
            break;
        case 3: 
            result = 'СР'
            break;
        case 4: 
            result = 'ЧТ'
            break;
        case 5: 
            result = 'ПТ' 
            break;
        case 6: 
            result = 'СБ' 
            break; 
        case 7: 
            result = 'ВС' 
            break;
    }
    return result;
}

//в учебнике конечно изящнее, опять не угадала
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 января 2014 года
  alert( getWeekDay(date) ); // ПТ

//-------------------------------------------------------------------------------------------ЗАДАЧА 3

// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), 
// которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

//так, если надо пн 1 и вс 7 то вот
function getLocalDay(date) {
    let result = date.getDay();
    if (result === 0) {
        result = 7;
    }
    return result;
}

//-------------------------------------------------------------------------------------------ЗАДАЧА 4

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
    return new Date(date.getTime() - 86400000 * days) 
}

//-------------------------------------------------------------------------------------------ЗАДАЧА 5

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 31)

    if (date.getMonth() != month) {
        date = new Date(year, month, 30)
    }
    if (date.getMonth() != month) {
        date = new Date(year, month, 29)
    }
    if (date.getMonth() != month) {
        date = new Date(year, month, 28)
    }
    return date;
}

//В УЧЕБНИКЕ ЕСТЕСТВЕННО НЕ ТАК  но я не понимала что так тоже работает автоисправление, что можно с нулем
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

//-------------------------------------------------------------------------------------------ЗАДАЧА 6

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let today = new Date();
    let todayMs = today.getTime();
    //потом берем начало сегодняшнего дня 00.00 и его милисекунды
    let todayStart = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getDate(), 0, 0, 0);
    let todayStartMs = todayStart.getTime();
    //вычитаем
    return todayMs - todayStartMs;

}
//наверняка надо покороче но так понятнее

//-------------------------------------------------------------------------------------------ЗАДАЧА 7

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let today = new Date();
    let todayMs = today.getTime();
    //то ж самое только берем начало следующего дня а не сегодняшнего 00.00
    let nextDay = new Date(today.getUTCFullYear(), today.getMonth(),today.getDate()+1, 0, 0, 0);
    let nextDayMs = nextDay.getTime();

    return nextDayMs - todayMs;
}

//-------------------------------------------------------------------------------------------ЗАДАЧА 8

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:
formatDate(new Date(new Date - 1)) ; // "прямо сейчас"

formatDate(new Date(new Date - 30 * 1000)) ; // "30 сек. назад"

formatDate(new Date(new Date - 5 * 60 * 1000)) ; // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
formatDate(new Date(new Date - 86400 * 1000)) ;

function formatDate(date) {
    let currentDate = new Date();
    let differenceMS = currentDate.getTime() - date.getTime();//сколько МС между сейчас и датой-аргументом

    if ((differenceMS) < 1000) {//меньше секунды
        return 'прямо сейчас';
    } else if (differenceMS >= 1000 && differenceMS < 60 * 1000) {//меньше минуты
        let n = differenceMS / 1000;//разница в секундах
        return `${n} секунд назад`;
    } else if (differenceMS > 60 * 1000 && differenceMS < 60 * 60 * 1000) {//меньше часа
        let m = differenceMS / (60 * 1000) //разница в минутах
        return `${m} минут назад`
    } else {
        //для форматирования 
        //число
        let day = date.getDate(); 
        day = day < 10 ? `0 + ${day}` : day;
        //месяц
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month; 
        //год
        let year = date.getFullYear();
        //время
        let hours = date.getHours();
        hours = hours < 10 ? `0${hours}` : hours; 
        let minutes = date.getMinutes();

        return `${day}.${month}.${year}, ${hours}:${minutes}`;
    }
}

