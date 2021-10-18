'use strict'

//дз по объектам, делать нужно после того как сделаете домашку в учебнике:

// Создать объект пользователя, в котором будут следующие данные:
// - Имя
// - Фамилия
// - Дата рождения в формате ISO 8601 а именно DD-MM-YYYY
// - Почта
// - Данные о собаке пользователя, а именно:
//     - Порода
//     - Цвет шерстки
//     - Характер
//     - Дата рождения в формате ISO 8601 а именно DD-MM-YYYY

const user = {
    name: 'Леви',
    surname: 'Аккерман',
    dateOfBirth: '1989-02-19',
    mail: 'captain_levi@mail.ru',
    dog: {
        breed: 'Хаски',
        color: 'белый',
        character: 'добрый',
        dogDateOfBirth: '2019-01-01',
    }

}

// Добавить методы объекту, которые будут:
// - Выводить полное имя пользователя

user.showFullName = function() {
    alert(`${this.name} ${this.surname}`);
    return this;
    //alert(`${this.name} + ' ' + ${this.surname}`)
}


// - Выводить информацию о собаке пользователя в формате:
// Порода: (значение),
// Цвет шерстки: (значение),
// Характер: (значение),
// Дата рождения: (значение)

// Обратите внимание что ключи слева - на русском языке (названия не будут динамическими), 
// тем временем как в объекте у вас обычные ключи на латинице

//не динамические как я понимаю это вот так

user.showDogInformation = function() {
    alert(`Порода: ${this.dog.breed}
    Цвет шестки: ${this.dog.color}
    Характер: ${this.dog.character}
    Дата рождения: ${this.dog.dogDateOfBirth}`);
    return this;
}

// - Добавить метод, который будет редактировать данные о породе собаки пользователя, 
// пример - user.setPetBreed('dachshund') где dachshund - новое значение породы

user.setPetBreed = function(newBreed) { 
    this.dog.breed = newBreed;
    return this;
}

// - Сделать так, что бы любой метод "чейнился", т.е. вызывался цепочкой, 
// т.е. можно было вызывать их вот так: user.method1().method2().method3()... -ко всем добавлено return this



// - Говорить, сколько дней осталось до дня рождения пользователя ***
user.countDaysTillBirthday = function() {

    let currentDate = new Date().valueOf();
    let birthDate = new Date(user.dateOfBirth).valueOf();
    let resultYears = 1 - ((currentDate - birthDate) / 31536000000 % 1); // вот столько в годах. тут примерно 0.9 года
    let resultDays = Math.floor(resultYears * 365); //отдельной переменной перевожу в дни и округляю до целого, а то и так много действий в одной переменной
    //округление в меньшую, т.к. тут не учтено нигде время дня и на практике так было бы логичнее
    alert (`До дня рождения пользователя осталось ${resultDays} дней`);
}

// //вариант 2

// for (let i = 1; i; i += 1) {
//     let currentDate.getdate()  //перебирать все даты через get date пока не напоремся на др и тогда стоп цикл и вывести дни както 
// }

// - Сделать 2 функции, первая - создает пользователя с данными, переданными в функцию (без собаки),

function makeUser(name, surname, dateOfBirth, mail) {
    
    return {
        name,
        surname,
        dateOfBirth,
        mail,
    }
}

const newUser = makeUser('Ivan', 'Reon', '2000-10-01', 'ivan@mail.ru');

// вторая - создает объект собаки с данными переданными в функцию, 

function makeDog(breed, color, character, dogDateOfBirth) {
    return {
        breed,
        color,
        character,
        dogDateOfBirth,
    }
}

const newDog = makeDog('такса', 'коричневый', 'добрый', '2018-10-01');
//создать пользователя, 

// поместить объект собаки созданный второй функцией в свойство pet у пользователя

//newUser.dog = newDog; ЧЕРЕЗ ПРИСВОЕНИЕ

newUser.addDog = function (newDog) {
    this.dog = newDog;
}

newUser.addDog(newDog);