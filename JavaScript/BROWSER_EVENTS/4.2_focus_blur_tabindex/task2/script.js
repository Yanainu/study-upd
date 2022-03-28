let table = document.getElementById('bagua-table');

/* ваш код */
let textarea;//просто хочу чтобы переменная была видна
let defaultHTML;//изначальное содержимое ячейки

let editMode = false;//если включен - сейчас происходит редактирование
let target;//для отслеживания куда клик


//РЕДАКТИРОВАНИЕ ЯЧЕЙКИ

function editCell(event) { //handleclick

    //если кликаем на соседнюю ячейку - ничего не должно происходить
    if (event.target !== target && editMode) return;

    //присваиваем таргет
    target = event.target;
    //чтобы таргетом всегда был td а не текст внутри
    if (target.tagName != 'TD') {
        target = target.closest('td');
    }

    //если кликаем повторно на ту же самую ячейку которая выбрана уже
    if (event.target === target && editMode) return;

    editMode = true;
    //остальное делается только если флаг true
        defaultHTML = target.innerHTML;

        //создание textarea
        textarea = document.createElement('textarea');
        textarea.value = defaultHTML;
        textarea.className = 'textarea';
        target.classList.add('editing_td') //для позиционирования
        //замена
        target.innerHTML = '';
        target.append(textarea)
        textarea.focus();
        
        //доб. кнопки 
        createButtons(target);

    

}

table.addEventListener('click', editCell)


//СОЗДАНИЕ КНОПОК + обработка нажатий
function createButtons(parentElement) {
    //в диве удобнее
    let buttonsContainer = document.createElement('div');
    parentElement.append(buttonsContainer);
    buttonsContainer.className = 'buttons_container';

    let submitButton = document.createElement('button');
    submitButton.textContent = 'OK';
    submitButton.className = 'button';

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.className = 'button';

    buttonsContainer.append(submitButton, cancelButton)

    //обработчик нажатия кнопок
    buttonsContainer.addEventListener('click', onButtonPush);

    function onButtonPush(event) {
        event.stopPropagation();//с этим исключилась ошибка изза всплытия клика снова на td и запуска edit еще раз
        let td = event.target.closest('td')
        textarea.remove();
        
        event.target === submitButton ? td.innerHTML = textarea.value : td.innerHTML = defaultHTML;

        editMode = false;
        target = null;
    }

    
}

