'use strict'

// задание от меня - реализовать собственные методы массивов у array, например:
const test = [1, 2, 3].myMap((item) => item * 2);

// нужно написать: map, reverse, forEach, find, filter
//--------------------------------------------------------------------------------

//MAP

Array.prototype.myMap = function(func) {
    const resultArray = [];
    for (let i = 0; i < this.length; i += 1) {
        resultArray.push(func(this[i]));
    }
    return resultArray;
}
const test = [1, 2, 3].myMap((item) => item * 2);///test = [2, 4, 6]

//--------------------------------------------------------------------------------

//REVERSE
//возвращает новый массив
Array.prototype.myReverse = function() {
    const resultArray = [];
    for (let i = this.length - 1; i >= 0; i -= 1) {
        resultArray.push(this[i])
    }
    return resultArray;
}

const test = [1, 2, 3, 4].myReverse()//[4, 3, 2, 1]

//мутирует исходный 
Array.prototype.myReverse = function() {
    const copiedThis = this.slice();
    for (let i = 0; i < this.length; i += 1) {
        this[i] = copiedThis[copiedThis.length-1-i]
    }
    return this;
}

arr = [1, 2, 3, 4];
arr.myReverse()//[4, 3, 2, 1] изменился arr

//--------------------------------------------------------------------------------

//FOR EACH

Array.prototype.myForEach = function(func) {
    for (let i = 0; i < this.length; i += 1) {
        func(this[i]);
    }
}

['one', 'two', 'three'].myForEach(alert);

//--------------------------------------------------------------------------------

//FIND

Array.prototype.myFind = function(func) {
    for (let i = 0; i < this.length; i += 1) {
        if (func(this[i])) {
            return this[i];
        }
    }
}

const testArr = [{name: 'Петя'}, {name: 'Вася'}]

testArr.myFind((item) => item.name === 'Петя')//{name: 'Петя'}

//--------------------------------------------------------------------------------

//FILTER

Array.prototype.myFilter = function(func) {
    const resultArray = [];
    for (let i = 0; i < this.length; i += 1) {
        if (func(this[i])) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}

const test = [1, 2, 3, 4, 5, 10].myFilter((item) => item > 3)//test = [4, 5, 10]

//---------------------------------------------------------------------------------------------------------------------
//CODEWARS
//---------------------------------------------------------------------------------------------------------------------

//https://www.codewars.com/kata/526471539d52735c620000c6

// Our counter prototype is broken. Can you spot, what's wrong here?

//должно быть вот

function Counter() {
    this.value = 0;
  }
  Counter.prototype.increase = function () {//тут были скобки increase(), а должно быть increase = function {}
    this.value++;
  };
  Counter.prototype.getValue = function () {
    return this.value;
  };
  Counter.prototype.reset = function () {
    this.value = 0;
  };

//-------------------------------------------------------------------------------------------------------------------

//https://www.codewars.com/kata/5645fda2956e462b5100005e

// Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements. Examples:

// [1,2,3] + 4 = 10
// [1,1,1] - 3 = 0
// ['a','b'] + 'c' = 'abc'

Array.prototype.valueOf = function() {
    //проверка есть ли хоть одна буква в массиве
    const notANumber = this.filter((item) => {
        +item != NaN
    })
    //если есть
    if (notANumber) {
        return this.join();//то приводим его к строке
    } 
    
    //если все было цифрами
    let sum = this.reduce((sum, item) => {//если нет - складываем элементы
        return sum += item; 
    },0)
    return sum;

}

//как надо было (ты в тг написал)

Array.prototype.valueOf = function() {
    if (!this.length) return 0;
    
    return this.reduce((prev, current) => {
        return prev += current; 
    })
  }
  
//-------------------------------------------------------------------------------------------------------------------

//https://www.codewars.com/kata/52b74e0936d582d9210005ff

//Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
// The reverse function should NOT modify the original string.

String.prototype.reverse = function() {
    const resultArray = [];
    for (let i = this.length - 1; i >= 0; i -= 1) {
        resultArray.push(this[i]);
    }
    return resultArray.join('')
}

const testString = 'ErenYeager'
testString.reverse()//'regaeYnerE'

//лол можно было проще, я затупила, сохраню тут чтобы было (это c codewars)
String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  }

//-------------------------------------------------------------------------------------------------------------------

//https://www.codewars.com/kata/517b0f33cd023d848d000001

// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70

var Warrior = function(name){
    this.name = name;  
    this.health = 100;
  }
  
  Warrior.strike = function(enemy, swings){
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }

//попытка поправить


// ninja.health should == 70

var Warrior = function(name){
    this.name = name;  
    this.health = 100;
  }
  
  Warrior.prototype.strike = function(enemy, swings){//работает со словом прототип 
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }


var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
