'use strict'

class toDoList {
    constructor() {
        //СТРАНИЦЫ/БЛОКИ, у которых я меняю отображение
        this.homePage = document.querySelector('.home-page-wrapper');
        this.calendarPage = document.querySelector('.calendar-page-wrapper');
        this.createPage = document.querySelector('.create-page-wrapper');
        this.editPage = document.querySelector('.edit-page-wrapper');

        //блоки-родители для списков - на хоум странице и на странице календаря. чтобы были видны во всех функциях
        this.homeListsParent = document.querySelector('.home-lists-parent');
        this.dateListsParent = document.querySelector('.date-lists-parent');

        //ФУТЕР навигация
        this.footer = document.querySelector('.footer');
        this.footerLinks = document.querySelectorAll('.footer-navigation__element-link');
        this.footerHomeLink = this.footerLinks[0];
        this.footerCalendarLink = this.footerLinks[1];

        this.homeIcon = document.querySelector('.home-icon');
        this.calendarIcon = document.querySelector('.calendar-icon');

        //форма
        this.form = document.querySelector('.task-form');
        this.taskTitle = document.getElementById('task-name');
        this.taskDate = document.getElementById('task-date');
        this.taskDescripton = document.getElementById('task-description');
        //кнопка создания задачи
        this.createTaskButton = document.querySelector('.task-form__create-button');
        //блок с контекстным меню (для доступности) будет сохраняться сюда
        this.taskMenu;
        //массив для хранения задач(вписаны примеры руками чтобы проверять работу изначально)
        this.allTasksArray = [
            {title: 'поступить в разведкорпус', date: '2022-04-21', description: 'blabla', isCompleted: true, id: '2345werwer090'},
            {title: 'подраться с жаном', date: '2022-04-20', description: 'blabla', isCompleted: true, id: 'asadsdfd'},
            {title: 'увидеть море', date: '2022-04-22', description: 'blabla', isCompleted: false, id: '2345090'},
            {title: 'построить железную дорогу', date: '2022-04-23', description: 'blabla', isCompleted: false, id: 'ggfhfh'},
            {title: 'УНИЧТОЖИТЬ ТИТАНОВ, ВСЕХ ДО ЕДИНОГО', date: '2022-04-23', description: 'blabla', isCompleted: false, id: '23qweqeerwereq5090'},
            {title: 'отрастить волосы', date: '2022-04-22', description: 'blabla', isCompleted: true, id: 'fghfhgfh'},
            {title: 'сожрать батю', date: '2022-04-21', description: 'blabla', isCompleted: true, id: 'dsdfsdf'},
        ]
        
        //для сохранения текущего объекта задачи при редактировании
        this.editingTaskObject = {};

        //для работы с датами - названия дней и месяцев и текущая дата с параметрами
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

        this.currentDate = new Date();
        this.currentDateNumber = this.currentDate.getDate();
        this.currentMonth = this.currentDate.getMonth();
        this.currentDayOfWeek = this.currentDate.getDay();
        this.currentYear = this.currentDate.getFullYear();

        this.chosenDayNumber = null;//сюда будет сохраняться дата при клике на календарь

        this.init();
    }

    get inProgressArray() {
        return this.allTasksArray.filter(item => !item.isCompleted)
    }

    get completedArray() {
        return this.allTasksArray.filter(item => item.isCompleted)
    }

    //форматированная дата для отбора в массиве
    get chosenDateAsString() {
        return `${this.currentYear}-0${this.currentMonth+1}-${this.chosenDayNumber}`;
    }

    //изначально - видны только кнопки навигации
    init() {
        //переходы по ссылкам на Home Calendar
        this.footerHomeLink.addEventListener('click', this.showHomePage.bind(this));
        this.footerCalendarLink.addEventListener('click', this.showCalendarPage.bind(this));
    }

    //сделать активной иконку дома или календаря (далее - при открытии нужной страницы включаются. именно от клика менять атрибут у меня не получилось нормально.)
    makeFooterHomeIconActive() {
        this.homeIcon.src = './source/footer-icons/footer-1-home-active.svg';
        this.calendarIcon.src = './source/footer-icons/footer-2-calendar-inactive.svg';
    }

    makeFooterCalendarIconActive() {
        this.homeIcon.src = './source/footer-icons/footer-1-home-inactive.svg';
        this.calendarIcon.src = './source/footer-icons/footer-2-calendar-active.svg';
    }

    //--------------------------------------------------------------------------------------------------------------------------------
    // КОНТЕКСТНОЕ МЕНЮ - РЕДАКТИРОВАТЬ, УДАЛИТЬ, ЗАВЕРШИТЬ
    //--------------------------------------------------------------------------------------------------------------------------------
    //показ контекстного меню по кнопке
    initTaskMenu(event) {
        this.taskMenu = document.querySelector('.task-menu');
        this.taskMenu.style.display = 'block';

        //определяем расположение меню исходя из нажатой кнопки
        let target = event.target; 
        let targetBtn = target.closest('.task-block__menu-button');
        let targetBtnCoords = target.getBoundingClientRect();
        this.taskMenu.style.top = `${targetBtnCoords.top + window.scrollY}px`;
        this.taskMenu.style.left = `${targetBtnCoords.left - this.taskMenu.offsetWidth}px`;

        //кнопки - редактировать, завершить, просто удалить 
        const editButton = document.querySelector('.task-menu__edit-button');
        const finishButton = document.querySelector('.task-menu__finish-button');
        const deleteButton = document.querySelector('.task-menu__delete-button');

        //обработчики на эти кнопки
        editButton.addEventListener('click', () => {
            //прокидываю нажатую кнопку чтобы видеть на какой задаче мы находимся
            this.editTask(targetBtn);
            this.hideElement(this.taskMenu); 
        })

        finishButton.addEventListener('click', () => {
            this.finishTask(targetBtn);
            this.hideElement(this.taskMenu);
        })

        deleteButton.addEventListener('click', () => {
            this.deleteTask(targetBtn);
            this.hideElement(this.taskMenu);
        })
    }

    hideElement(element) {
        element.style.display = 'none';
    }
    
    ///////////////////////////////////////////////////////////////////////////////////РЕДАКТИРОВАНИЕ

    editTask(clickedButton) {
        //очистить editingObj
        this.editingTaskObject = {};
        //определить объект задачи для редактирования
        this.initEditingObject(clickedButton);

        //открыть editPage с подтягиванием данных этого объекта
        this.showEditPage();
    }

    //определить объект задачи для редактирования
    initEditingObject(clickedButton) {
        //определить объект задачи, на который мы нажали
        let currentTaskItem = clickedButton.closest('.task-block');
        let currentTaskTitle = currentTaskItem.querySelector('.task-block__title-name').innerText;//название задачи

        //нужный объект - сохраняю в конструктор чтобы не было проблем с доступом
        let currentTaskInArray = this.allTasksArray.filter(item => item.title === currentTaskTitle);
        this.editingTaskObject = currentTaskInArray[0];
    }

    showEditPage() {
        //показываем
        this.createPage.style.display = 'none';
        this.calendarPage.style.display = 'none';
        this.homePage.style.display = 'none';
        this.footer.style.display = 'none';
        this.editPage.style.display = 'block';
        //скрываем менюшку
        this.hideElement(this.taskMenu);

        this.initEditPage();
    }

    //подтягиваем в инпуты данные выбранной задачи и вешаем события - сохранение изменений, сабмит, возврат в хоум
    initEditPage() {

        //кнопка навигации - вернуться на дом страницу - пока не работает
        // const goToHomePageButton = document.querySelector('.navigation__go-back-home');
        // goToHomePageButton.addEventListener('click', console.log('click'));

        let taskTitleInput = document.querySelector('#edit-task-name');
        taskTitleInput.value = this.editingTaskObject.title;

        let taskDateInput = document.querySelector('#edit-task-date');
        taskDateInput.value = this.editingTaskObject.date;

        let taskDescriptonInput = document.querySelector('#edit-task-description');
        taskDescriptonInput.value = this.editingTaskObject.description;

        //сохранить изменененя из инпутов в объект
        this.saveInputChagesToObject(taskTitleInput, taskDateInput, taskDescriptonInput)

        //инициируем форму и при сабмите возвращаемся на хоум уже с новой задачей (объект уже обновлен)
        const editForm = document.querySelector('.edit-task-form');

        editForm.addEventListener('submit', (event) => {
            event.preventDefault();

            //очистить editingObj
            this.editingTaskObject = {};
            this.showHomePage();
        });
    }

    saveInputChagesToObject(titleInput, dateInput, descriptonInput) {
        titleInput.addEventListener('change', () => {
            this.editingTaskObject.title = titleInput.value;
        })
        dateInput.addEventListener('change', () => {
            this.editingTaskObject.date = dateInput.value;
        })
        descriptonInput.addEventListener('change', () => {
            this.editingTaskObject.description = descriptonInput.value;
        })
    }

   
    //обновление св-ва объекта - запись туда нового содержимого инпута
    updateObjectProperty(inputName, objectProperty) {
        objectProperty = inputName.value;
        console.log(objectProperty, 'objectProperty')
    }
    

    ///////////////////////////////////////////////////////////////////////////////////ЗАВЕРШЕНИЕ
    finishTask(clickedButton) {
        //очистить editingObj
        this.editingTaskObject = {};
        //определить объект задачи для редактирования
        this.initEditingObject(clickedButton);
        //появился editingTaskObject, но форму я уже  не открываю а просто делаю isCompleted true
        this.editingTaskObject.isCompleted = true;

        //очистить editingObj
        this.editingTaskObject = {};
        //и возвращаюсь на хоум
        this.showHomePage();
    }

    ///////////////////////////////////////////////////////////////////////////////////УДАЛЕНИЕ

    deleteTask(clickedButton) {
        //очистить editingObj
        this.editingTaskObject = {};
        //определить объект задачи для редактирования
        this.initEditingObject(clickedButton);
        //появился editingTaskObject, просто удаляю его из массива. удаляю по айди, могут быть одинаковые названия
        this.removeTaskObjectFromArray(this.editingTaskObject.id)

        //очистить editingObj
        this.editingTaskObject = {};

        //и возвращаюсь на хоум
        this.showHomePage();
    }

    //удаление из массива задачи по айди
    removeTaskObjectFromArray(id) {
        //находим индекс этого объекта
        let index = this.allTasksArray.findIndex(item => item.id === id);

        if (index) {
            this.allTasksArray.splice(index, 1)
        }
    }

    //--------------------------------------------------------------------------------------------------------------------------------
    // HOME PAGE 
    //--------------------------------------------------------------------------------------------------------------------------------

    //ИНИЦИАЛИЗАЦИЯ 
    showHomePage() {
        this.homePage.style.display = 'block';
        this.calendarPage.style.display = 'none';
        this.createPage.style.display = 'none';
        this.editPage.style.display = 'none';

        this.footer.style.display = ''
        this.makeFooterHomeIconActive();
        this.initHomePage();
    }

    initHomePage() {
        //кнопки фильтрации задач
        const filterButtonsWrapper = document.querySelector('.filter-buttons');
        const filterButtons = document.querySelectorAll('.filter-buttons__button');
        const myTasksButton = filterButtons[0];
        const inProgressButton = filterButtons[1];
        const completedButton = filterButtons[2];

        //отображение разных списков при клике на кнопки
        myTasksButton.addEventListener('click', this.showAllTasks.bind(this));
        myTasksButton.classList.add('filter-buttons__active-button');
        inProgressButton.addEventListener('click', () => {
            this.clearCurrentLists.call(this, null, this.homeListsParent);
            this.showInProgressTasks.call(this, null, this.homeListsParent);
        });
        completedButton.addEventListener('click', () => {
            this.clearCurrentLists.call(this, null, this.homeListsParent);
            this.showCompletedTasks.call(this, null, this.homeListsParent);
        });
        //смена оформления кнопок при активности
        filterButtonsWrapper.addEventListener('click', this.makeButtonActive.bind(this));

        //рендер сразу двух списков изначально
        this.showAllTasks(); 
    }

    //отображение разных списков 
    showAllTasks() {
        //очистка того, что уже отображается
        this.clearCurrentLists();
        //рендер каждого списка

        this.showInProgressTasks(null, this.homeListsParent);
        this.showCompletedTasks(null, this.homeListsParent);
    }    

    //показать задачи в процессе либо все, либо на дату, если дата прокинута
    showInProgressTasks(date, parent) {
        let taskList = this.inProgressArray;
        if (date) {
            taskList = this.inProgressArray.filter(item => item.date === date);
        }
        if (taskList.length) {
            this.renderTaskList('In Progress', taskList, parent, 'in-progress-list');
        }
    }

    //показать завершенные задачи либо все, либо на дату, если дата прокинута
    showCompletedTasks(date, parent) {
        let taskList = this.completedArray;
        if (date) {
            taskList = this.completedArray.filter(item => item.date === date);
        }

        if (taskList.length) {
            this.renderTaskList('Completed', taskList, parent, 'completed-list');
        }
    }

    //отрисовка списка задач (либо inprogress, либо completed и массив задач - inProgressArray/completedArray) и родитель - смотря на какой стр рисуем
    renderTaskList(title, taskArray, parentElement, listClassName) {   
 
        //контейнер со списком tasks-block// 
        let tasksBlock = this.createElement('tasksBlock', 'div', 'tasks-block', parentElement);

        //заголовок tasks-block__head-text
        let tasksBlockHeadText = this.createElement('tasksBlockHeadText', 'p', 'tasks-block__head-text', tasksBlock);
        tasksBlockHeadText.innerText = title;

        //<ul class="tasks-block__list"> - сам список, прокидывается в createListItem
        let tasksBlockList = this.createElement('tasksBlockList', 'ul', 'tasks-block__list', tasksBlock);
        //доп класс - 4й аргумент 
        tasksBlockList.classList.add(listClassName);
        
        //проходим по массиву и по каждому элементу массива рисуем listItem
        taskArray.forEach(item => {
            this.createListItem(item)
        })

        //после рендера любого списка задач - навесить на все кнопки меню обработчик
        const currentMenuButtons = document.querySelectorAll('.task-block__menu-button');
        currentMenuButtons.forEach(item => item.addEventListener('click', this.initTaskMenu.bind(this)));  
    }

    //перекрашивание кнопок - добавление класса нужной кнопке и сброс его с остальных
    makeButtonActive(event) {
        let target = event.target;
        let buttons = document.querySelectorAll('.filter-buttons__button');
        buttons.forEach((item) => {
            item === target ? item.classList.add('filter-buttons__active-button') : item.classList.remove('filter-buttons__active-button');
        })
        
    } 

    //создание отдельного элемента на странице
    createElement(element, tagName, className, parent) {
        element = document.createElement(tagName);
        element.classList.add(className);
        parent.append(element);
        return element;
    }
    
    //отрисовка одного пункта списка listItem, где taskObject - это объект задачи
    createListItem(taskObject) {
        //определяем в какой из списков добавляем пункт
        let currentList;
        currentList = taskObject.isCompleted ? 
            document.querySelector('.completed-list') : 
            document.querySelector('.in-progress-list');

        //tasks-block__list-item
        let listItem = this.createElement('listItem', 'li', 'tasks-block__list-item', currentList);
            //task-block
            let taskBlock = this.createElement('taskBlock', 'div', 'task-block', listItem);
                //task-block__items
                let taskBlockItems = this.createElement('taskBlockItems', 'div', 'task-block__items', taskBlock);
                    //task-block__icon-container
                    let taskBlockIconContainer = this.createElement('taskBlockIconContainer', 'div', 'task-block__icon-container', taskBlockItems);
                        //task-block__icon
                        let taskBlockIcon = this.createElement('taskBlockIcon', 'img', 'task-block__icon', taskBlockIconContainer);
                        taskBlockIcon.src = './source/home/to-do-list_icon.png';
                        taskBlockIcon.width = taskBlockIcon.height = '61';
                        taskBlockIcon.alt = 'to-do-list-icon';
    
                    //task-block__title
                    let taskBlockTitle = this.createElement(
                        'taskBlockTitle', 
                        'div', 
                        'task-block__title', 
                        taskBlockItems
                    );

                        //task-block__title-name
                        let taskBlockTitleName = this.createElement('taskBlockTitleName', 'p', 'task-block__title-name', taskBlockTitle);
                        taskBlockTitleName.innerText = taskObject.title;
                        //task-block__title-date
                        let taskBlockTitleDate = this.createElement('taskBlockTitleName', 'p', 'task-block__title-date', taskBlockTitle);
                        taskBlockTitleDate.innerText = taskObject.date;
    
                //task-block__menu-container
                let taskBlockMenuContainer = this.createElement('taskBlockMenuContainer', 'div', 'task-block__menu-container', taskBlock);
                    //task-block__menu-button
                    let taskBlockMenuButton = this.createElement('taskBlockMenuButton', 'button', 'task-block__menu-button', taskBlockMenuContainer);
                        //task-block__menu-button-icon
                        let taskBlockMenuButtonIcon = this.createElement('taskBlockMenuButtonIcon', 'img', 'task-block__menu-button-icon', taskBlockMenuButton);
                        taskBlockMenuButtonIcon.src = './source/home/context-button-icon.svg';

    }   


    //стирание имеющихся на странице списков - когда мы переключаемся между списками
    clearCurrentLists() {
        const allLists = document.querySelectorAll('.tasks-block');
        allLists.forEach(item => item.remove())
    }
    

    //--------------------------------------------------------------------------------------------------------------------------------
    // CALENDAR PAGE 
    //--------------------------------------------------------------------------------------------------------------------------------
    
    //отобразить страницу
    showCalendarPage() {
        this.calendarPage.style.display = 'block';
        this.homePage.style.display = 'none';
        this.editPage.style.display = 'none';
        //очистить все списки с хоум страницы дополнительно, чтобы они не мешали при отображении списков в календаре
        this.clearCurrentLists();

        this.createPage.style.display = 'none';
        this.footer.style.display = '';
        this.makeFooterCalendarIconActive();
        this.initCalendarPage();
    }

    initCalendarPage() {
        //рендер календаря от текущей даты
        const calendar = document.querySelector('.calendar');
        this.clearCalendar();
        this.renderCalendar(calendar);
        //вкл кнопку возвращения обратно на хоум
        const goBackHomeButton = document.querySelector('.navigation__go-back-home');
        goBackHomeButton.addEventListener('click', this.showHomePage.bind(this));


    }

    //рендер всего блока с календарем - дата, кнопка, неделя
    renderCalendar(calendar) {
        //дата и кнопка добавления - прокидываю див-родитель 
        this.renderCurrentAndCreate(calendar);
        //месяц дат с отображением недели
        this.renderMonth(calendar);
    }

    //очищает страницу с календарем перед обновлением
    clearCalendar() {
        //проверка на наличие каждого блока, если он есть - удаляем
        const currentAndCreate = document.querySelector('.calendar__current-and-create');
        if (currentAndCreate) {
            currentAndCreate.remove();
        }
        
        const calendar = document.querySelector('.calendar__week');
        if (calendar) {
            calendar.remove();
        }
        
        const tasksBlock = document.querySelector('.tasks-block');
        if (tasksBlock) {
            tasksBlock.remove();
        }
    }

    //отрисовка блока - дата и кнопка добавления
    renderCurrentAndCreate(calendar) {
        //<div class="calendar__current-and-create">
        let currentAndCreate = this.createElement('currentAndCreate', 'div', 'calendar__current-and-create', calendar);
            //дата <h2 class="current-and-create__date">Oct, 2020</h2>
            let currentAndCreateDate = this.createElement('currentAndCreateDate', 'h2', 'current-and-create__date', currentAndCreate);
            this.fillDateRow(currentAndCreateDate);

            //кнопка добавления задачи и перехода на страницу создания
            //<button class="current-and-create__create-button create-task-button">
            let currentAndCreate_createButton = this.createElement('currentAndCreate_createButton', 'button', 'current-and-create__create-button', currentAndCreate);
            currentAndCreate_createButton.classList.add('create-task-button');
                //иконка +
                //<img class="current-and-create__create-icon"  width="24" height="24" src="./source/task-alender/main-plus-icon.svg" alt="plus icon">
                let currentAndCreate_createIcon = this.createElement('currentAndCreate_createIcon', 'img', 'current-and-create__create-icon', currentAndCreate_createButton);
                currentAndCreate_createIcon.setAttribute('src', './source/task-alender/main-plus-icon.svg');
                currentAndCreate_createIcon.setAttribute('width','24');
                currentAndCreate_createIcon.setAttribute('height', '24');
                currentAndCreate_createIcon.setAttribute('alt', 'plus-icon');
                //текст
                //<p class="current-and-create__create-text">Add Task</p>
                let currentAndCreate_createText = this.createElement('currentAndCreate_createText', 'p', 'current-and-create__create-text', currentAndCreate_createButton);
                currentAndCreate_createText.innerText = 'Add Task';

        //обработчик на кнопку add task - переход на страницу создания
        currentAndCreate_createButton.addEventListener('click', this.showCreatePage.bind(this));
    }

    //заполняет элемент датой в виде строки  Apr, 2022  
    fillDateRow(element) {
        let monthName = this.monthNames[this.currentMonth];
        let year = this.currentDate.getFullYear();
        element.innerText = `${monthName}, ${year}`;
    }
    
    //отрисовка месяца
    renderMonth(calendar) {

        // <div class="calendar__week current-week">
        let calendarWeek = this.createElement('calendarWeek', 'div', 'calendar__week', calendar);
        calendarWeek.classList.add('.current-week');

        //определить кол-во дней в месяце
        const daysInMonth = this.calcDaysInMonth(this.currentDate);
        //рендерим 30/31 дней
        let dayContainer;
        for (let i = 1; i <= daysInMonth; i += 1) {
            // <div class="calendar__week-day-container">
            dayContainer = this.createElement('dayContainer', 'div', 'calendar__week-day-container', calendarWeek);
            // <p class="calendar__week-day-name">Mo</p>
            let dayName = this.createElement('dayName', 'p', 'calendar__week-day-name', dayContainer);
            dayName.innerText = this.calcDayOfWeek(i);
            // <p class="calendar__week-day-number">3</p>
            let dayNumber = this.createElement('dayNumber', 'p', 'calendar__week-day-number', dayContainer);
            dayNumber.innerText = i;
            
            //как только попадаем на сегодняшнее число - подсветить, обновить дату для задач, рендер списка. потом при клике - будет вешаться на др день
            if (i === this.currentDateNumber) {
                this.hightlightAndRememberDateContainer(dayContainer);
                this.renderChosenDateTaskList(this.chosenDateAsString)
            }
        }

        //и прокручиваем все это сразу на актуальную неделю
        this.scrollToCurrentWeek();
        //обработчик на весь контейнер с датами - подсветка дня, на который кликнули + запоминание даты в конструктор
        calendarWeek.addEventListener('click', (e) => {
            this.hightlightClickedDay.call(this, e);
            this.showChosenDateTaskList.call(this, e)
        });
    }
    //находит день недели для переданного числа (типа передала 1 - результат 'Fri', т.к. 1 апреля это пятница)
    calcDayOfWeek(dateNum) {
        const thisDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), dateNum);
        let thisDayOfWeek = this.dayNames[thisDate.getDay()-1];
        if (!thisDayOfWeek) {
            thisDayOfWeek = this.dayNames[6];
        }
        return thisDayOfWeek;
    }
    //посчитать кол-во дней в месяце
    calcDaysInMonth(date) {
        const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return nextDate.getDate();
    }

    //отобразить полосу с датами с таким скроллом, чтобы сразу отоборажалась именно текущая неделя
    scrollToCurrentWeek() {
        //находим дату понедельника на текущей неделе
        const currentMondayDate = this.currentDateNumber - (this.currentDayOfWeek - 1);

        //проходимся по всем контейнерам с днями и находим тот, в котором нужная дата (текущего понедельника)
        let allDayContainers = document.querySelectorAll('.calendar__week-day-container');
        let currentMondayContainer;
        allDayContainers.forEach(item => {
            //если число в контейнере равно нужному - отбираем его (равенство неточное т.к. формат разный и так проще записать)
            if (item.children[1].innerHTML == currentMondayDate) {
                currentMondayContainer = item;
            }
        })
        
        //если понедельник найден - скроллим к нему. если не найден - ничего не делаем(значит месяц только начался)
        if (currentMondayContainer) {
            //scrollLeft у полосы = кол-во дней до этого понедельника * ширину одного дня(контейнера)
            let daysRow = document.querySelector('.calendar__week');
            daysRow.scrollLeft = (currentMondayDate-1)*currentMondayContainer.offsetWidth;
        }

    }
    

    //показать задачи на выбранную дату(с очисткой предыдущих)
    showChosenDateTaskList() {
        //очистить то что срендерилось до этого
        this.clearCurrentLists();
        //рендер с новой датой
        this.renderChosenDateTaskList(this.chosenDateAsString)
    }
    //рендер блока с задачами на выбранную дату
    renderChosenDateTaskList(chosenDate) {
        this.showInProgressTasks(chosenDate, this.dateListsParent)
        this.showCompletedTasks(chosenDate, this.dateListsParent)    

        //после рендера любого списка задач - навесить на все кнопки меню обработчик
        const currentMenuButtons = document.querySelectorAll('.task-block__menu-button');
        currentMenuButtons.forEach(item => item.addEventListener('click', this.initTaskMenu.bind(this)));    
    }

    //подсветка выбранной даты+ запоминание даты
    hightlightAndRememberDateContainer(dateContainer) {
         //сброс активности у всех дней (если уже был какой-то выбран)
         let allDayContainers = document.querySelectorAll('.calendar__week-day-container');
         let allDayNames = document.querySelectorAll('.calendar__week-day-name');
         let allDayNumbers = document.querySelectorAll('.calendar__week-day-number');
 
         allDayContainers.forEach((item) => item.classList.remove('active-day-container'));
         allDayNames.forEach((item) => item.classList.remove('active-day'));
         allDayNumbers.forEach((item) => item.classList.remove('active-day'));

         //навешивание на нужный dateContainer
         const activeContaner = dateContainer;
         const activeDayName = activeContaner.children[0];
         const activeDayNumber = activeContaner.children[1];
 
         activeContaner.classList.add('active-day-container');
         activeDayName.classList.add('active-day');
         activeDayNumber.classList.add('active-day');

         //запомнить в конструктор дату(именно день, число), чтобы потом ее перетащить на 3ю страницу
         this.chosenDayNumber = activeDayNumber.innerText;

         
    }
    //какбы обертка для hightlightAndRememberDateContainer с событием. это вешается на клик
    hightlightClickedDay(event) {
        const target = event.target;
        const activeContaner = target.closest('.calendar__week-day-container');
        this.hightlightAndRememberDateContainer(activeContaner);
    }

    //-----------------------------------------------------------------------------------------------------------------
    // CREATE PAGE
    //-----------------------------------------------------------------------------------------------------------------

    showCreatePage() {
        this.createPage.style.display = 'block';
        this.calendarPage.style.display = 'none';
        this.homePage.style.display = 'none';
        this.footer.style.display = 'none';
        this.editPage.style.display = 'none';
        this.initCreatePage();
    }

    initCreatePage() {
        //подтянуть дату, выбранную в календаре до этого
        this.taskDate.value = `${this.currentYear}-0${this.currentMonth+1}-${this.chosenDayNumber}`;
        //при отправке формы - запускается процесс создания задачи (чтобы и при нажатии enter она создавалась)
        this.form.addEventListener('submit', this.createTask.bind(this));
        //и переход на хоум
        this.form.addEventListener('submit', this.showHomePage.bind(this));
        //переход назад - на календарь
        const goBackToCalendarButton = document.querySelector('.navigation__go-back-to-calendar');
        goBackToCalendarButton.addEventListener('click', this.showCalendarPage.bind(this))
    }

    //функция создания задачи из формы
    createTask(event) {
        //отключить автообновление страницы
        event.preventDefault();
        //создание объекта задачи и добавление в массив
        this.createTaskObject();//создается объект задачи и добавляется в массив 
    }

    //создание объекта-задачи (с добавлением в массив inprogress)
    createTaskObject() { 
        let taskObject = {};
        taskObject.title = this.taskTitle.value;
        taskObject.date = this.taskDate.value;
        taskObject.description = this.taskDescripton.value;
        taskObject.isCompleted = false;
        taskObject.id = this.createUniqueID();

        this.allTasksArray.push(taskObject);
    }
    //для формирования айди задач
    createUniqueID() {
        return Math.random().toString(36).substring(7);
    }


    
}

const myToDoList = new toDoList();






















