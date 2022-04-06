'use strict'


class toDoList {
    constructor() {
        //МАССИВЫ ЗАДАЧ
        this.allTasksArray = [];
        this.inProgressTasksArray = [];
        this.completedTasksArray = [];

        //кнопки фильтрации задач
        this.filterButtons = document.querySelectorAll('.filter-buttons__button');
        this.myTasksButton = this.filterButtons[0];
        this.inProgressButton = this.filterButtons[1];
        this.completedButton = this.filterButtons[2];

        //списки inprogress completed
        this.taskLists = document.querySelectorAll('.tasks-block__list');
        this.inProgressList = this.taskLists[0];
        this.completedList = this.taskLists[1];

        //ФУТЕР 
        this.footerLinks = document.querySelectorAll('.footer-navigation__element-link');
        this.footerHomeLink = this.footerLinks[0];
        this.footerCalendarLink = this.footerLinks[1];
        this.footerShowNotificationsLink = this.footerLinks[2];
        this.footerSearchLink = this.footerLinks[3];

        //форма
        this.createTaskForm = document.querySelector('.task-form');//запись document.forms[0] не работала я так и не поняла почему.
        this.createTaskName = document.getElementById('task-name');
        this.createTaskDate = document.getElementById('task-date');
        //кнопка создания
        this.createTaskButton = document.querySelector('.task-form__create_button');

        this.init();
    }

    init() {
        console.log(this.createTaskForm);
        this.createTaskForm.addEventListener('submit', this.addTask);

    }


    addTask() {
        let taskObject = this.createTaskObject();

        //отрисовка li на странице
        this.createListItem(taskObject, inProgressList);
    }

    editTask() {

    }

    deleteTask() {

    }

    completeTask() {

    }
    //--------------------------------------------------------------------------------------------------------------
    //ДОП МЕТОДЫ

    //создание объекта-задачи (с добавлением в массив inprogress)
    createTaskObject() { 
        let taskObject = {};
        taskObject.title = this.createTaskName;
        taskObject.date = this.createTaskValue;
        taskObject.isCompleted = false;
        taskObject.id = createUniqueID();

        this.inProgressTasksArray.push(taskObject);
        
        return taskObject;
    }
    
    createUniqueID() {
        return Math.random().toString(36).substring(7);
    }

    //создание отдельного элемента на странице
    createElement(element, tagName, className, parent) {
        element = document.createElement(tagName);
        element.classList.add(className);
        parent.append(element);
        return element;
    }


    //отрисовка li 
    createListItem(listType) {
    //tasks-block__list-item
    let listItem = createElement('listItem', 'li', 'tasks-block__list-item', listType);
        //task-block
        let taskBlock = createElement('taskBlock', 'div', 'task-block', listItem);

            //task-block__items
            let taskBlockItems = createElement('taskBlockItems', 'div', 'task-block__items', taskBlock);
                //task-block__icon-container
                let taskBlockIconContainer = createElement('taskBlockIconContainer', 'div', 'task-block__icon-container', taskBlockItems);
                    //task-block__icon
                    let taskBlockIcon = createElement('taskBlockIcon', 'img', 'task-block__icon', taskBlockIconContainer);
                    taskBlockIcon.src = './source/home/to-do-list_icon.png';
                    taskBlockIcon.width = taskBlockIcon.height = '61';
                    taskBlockIcon.alt = 'to-do-list-icon';

                //task-block__describes
                let taskBlockDescribes = createElement('taskBlockDescribes', 'div', 'task-block__describes', taskBlockItems);
                    //task-block__describes-name
                    let taskBlockDescribesName = createElement('taskBlockDescribesName', 'p', 'task-block__describes-name', taskBlockDescribes);
                    taskBlockDescribesName.innerText = taskObject.name;
                    //task-block__describes-date
                    let taskBlockDescribesDate = createElement('taskBlockDescribesName', 'p', 'task-block__describes-date', taskBlockDescribes);
                    taskBlockDescribesDate.innerText = taskObject.date;

            //task-block__menu-container
            let taskBlockMenuContainer = createElement('taskBlockMenuContainer', 'div', 'task-block__menu-container', taskBlock);
                //task-block__menu-button
                let taskBlockMenuButton = createElement('taskBlockMenuButton', 'button', 'task-block__menu-button', taskBlockMenuContainer);
                    //task-block__menu-button-icon
                    let taskBlockMenuButtonIcon = createElement('taskBlockMenuButtonIcon', 'img', 'task-block__menu-button-icon', taskBlockMenuButton);
                    taskBlockMenuButtonIcon.src = './source/home/context-button-icon.svg';
    }   

    
}

const myToDoList = new toDoList();






















