'use strict'

//-------------------------------------------------------------------------- ЗАДАЧА 1 

// У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text
//одинаково сработают 1 и 3 т.к. при append текст вставляется как текст, а не как html

//-------------------------------------------------------------------------- ЗАДАЧА 2

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

/*<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>*/

{/* <script> */}
  //МОЕ РЕШЕНИЕ так можно?
  function clear(elem) {
    for (let child of elem.children) {
      child.remove()
    }
    
  }
  clear(elem); // очищает список
// </script> 

  //РЕШЕНИЕ УЧЕБНИКА
  while (elem.firstChild) {
    elem.firstChild.remove();
  }

//-------------------------------------------------------------------------- ЗАДАЧА 3
// Запустите этот пример. Почему вызов remove не удалил текст "aaa"?

{/* <table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  ИЗ-ЗА АВТОИСПРАВЛЕНИЯ И ДОБАВЛЕНИЯ ТЕГА TBODY ТОГДА АААА ПОПАЛО ЗА ID = 'TABLE' И НЕ УДАЛИЛОСЬ
</script> */}

//-------------------------------------------------------------------------- ЗАДАЧА 4 5 6 7 8 9 10 в отдельных папках


