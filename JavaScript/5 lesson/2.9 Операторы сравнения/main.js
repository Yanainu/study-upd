'use strict'

//Каким будет результат этих выражений?

5 > 4 // true
"ананас" > "яблоко" // false пушто а < я
"2" > "12" // true по первому символу 2 > 1   
undefined == null // написано что это "правило языка" - true
undefined === null //разные типы поэтому false
null == "\n0\n" // ну false вроде должен быть... непустая строка это же не ноль
null === +"\n0\n" // тоже false ..
// часть справа почему-то приводится к нулю 0, но null === 0 это не верно 
