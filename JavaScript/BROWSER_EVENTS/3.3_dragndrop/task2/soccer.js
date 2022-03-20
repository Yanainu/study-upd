// ваш код

'use strict'

let moveAllowed = false;
let currentElement;//текущий див который мы двигаем - чтобы был виден из всех функций
let shiftX;
let shiftY;
const draggableElements = document.querySelectorAll('.draggable');

//ВЗЯТЬ
document.body.addEventListener('mousedown', takeElement)//требование в задаче - навесить один обработчик mousedown

function takeElement(event) {
    
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('draggable')) {
        //флаг
        moveAllowed = true;

        //элемент и его координаты
        currentElement = target.closest('.draggable');
        let currentElementCoords = currentElement.getBoundingClientRect();
        
        //вычисление точки где мы тыкнули мышкой относительно краев элемента
        shiftX = event.clientX - currentElementCoords.left;
        shiftY = event.clientY - currentElementCoords.top;

        //позиционирование после клика
        currentElement.style.position = 'absolute';
        currentElement.style.zIndex = 1000;
        document.body.append(currentElement);

        //движение
        moveElement(event.pageX, event.pageY)
    }

}

//ДВИГАТЬ
function moveElement(pageX, pageY) {
    if (moveAllowed) {

        let fromLeft = pageX - shiftX;
        let fromTop = pageY - shiftY;

        //ограничения слева и сверху
        if (fromLeft < 0) {
            fromLeft = 0;
        }
        if (fromTop < 0) {
            fromTop = 0;
        }
        
        // //ограничения справа и снизу по размерам окна
        if (fromLeft > document.documentElement.clientWidth) {
            fromLeft = document.documentElement.clientWidth;
        }
        if (fromTop > document.documentElement.clientHeight) {
            fromTop = document.documentElement.clientHeight;
        }        
        
        currentElement.style.left = `${fromLeft}px`;
        currentElement.style.top = `${fromTop}px`;

        window.scrollTo(pageX, pageY)
            
    }
}

function onMouseMove(event) {
    moveElement(event.pageX, event.pageY);
}
document.addEventListener('mousemove', onMouseMove);

//ОТПУСТИТЬ
document.addEventListener('mouseup', dropElement);

function dropElement(event) {
  moveAllowed = false;
}