'use strict'

//------------------------------------------------------------------------ЗАДАЧА 1
//Для страницы:

{/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html> */}

//Напишите код, как получить…

//элемент <div>?
document.body.firstElementChild;

//<ul>?
document.body.lastElementChild;
document.body.children[1];

//второй <li> (с именем Пит)?
document.body.lastElementChild.lastElementChild;

//------------------------------------------------------------------------ЗАДАЧА 2

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null? - да т.к. он последний

// Правда, что elem.children[0].previousSibling всегда равен null ? нет, это тоже может быть пробел

//------------------------------------------------------------------------ЗАДАЧА 3 В ОТДЕЛЬНОЙ ПАПКЕ

