'use strict'

//-----------------------------------------------------------------------------------------------
//https://www.codewars.com/kata/57a93f93bb9944516d0000c1
//In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

//решение(предположу, что слово+определиние это будет объект, а словарь - массив объектов)

class Dictionary {
    constructor() {
      // your code
      this.items = new Map();
    }
    
    newEntry(key, value) {
      // your code
      this.items.set(key, value);
    }
    
    look(key) {
      // your code
      if (this.items.has(key)) {
        return this.items.get(key);
      } else {
        return `Can't find entry for ${key}`;
      }
    }
  }

  let d = new Dictionary();

  d.newEntry("Apple", "A fruit that grows on trees");
  
  console.log(d.look("Apple"));//A fruit that grows on trees
  console.log(d.look("Banana"));//Can't find entry for Banana

  //-----------------------------------------------------------------------------------------------
//https://www.codewars.com/kata/598a48baae35d17bc500001d условие очень длинное не буду копировать (зал славы)

//ver1
class HallOfFame {

    constructor(count, playersArray){
        if (count) {
          this.count = count;
        } else {
          this.count = 5;
        }
        
        if (playersArray) {
          this.playersArray = playersArray;
        } else {
          this.playersArray = [];
        }
        
    }
    
    get list(){
      //сортировка по скору, если есть одинаковый скор - то по имени

      let topPlayersSorted = this.playersArray.sort((a,b) => {
        if (b[1] > a[1]) return 1;
        if (b[1] < a[1]) return -1;//(сортировка по скору)
        if (b[1] === a[1]) {//если скоры равны - сортировка по имени
          if (a[0] < b[0]) return -1;
          if (a[0] > b[0]) return 1;
        }
      });
       
      let topPlayersStrings = topPlayersSorted.map(item => `${item[0]}: ${item[1]}`)//(вид какой им надо, строки)
      
      if (topPlayersStrings.length < this.count) {
        let delta = this.count - topPlayersStrings.length;//разница между кол-вом игроков по факту и кол-вом которое должно быть выведено
        for (let i = 0; i < delta; i += 1) {//добавляем пустых игроков сколько не хватает
          topPlayersStrings.push('');
        }
        return topPlayersStrings;
      } else {
        return topPlayersStrings.slice(0, this.count);
      }
      
    }
    
  add(player){
    //замена скора игрока, если игрок с таким именем уже присутствует
    //ищем элемент с тем же именем
    if(this.playersArray.find(item => item[0] === player[0])) {
      //теперь надо найти где это совпадение
      let index = this.playersArray.findIndex(item => item[0] === player[0]);
      //теперь - заменяем только если скор больше имеющегося
      if(this.playersArray[index][1] < player[1]) {
        this.playersArray[index][1] = player[1];
      }
      
    } else {
      this.playersArray.push(player);
    }
    return this;
  } 
  }

  //для проверки сортировки по имени

  let test = [ [ 'Bob', 88 ],
  [ 'Zoe', 88 ],
  [ 'Kim', 88 ],
  [ 'Eva', 66 ],
  [ 'Ada', 44 ],
  [ 'Clo', 10 ],
  [ 'Dan', 3 ] ] //

  let top4 = new HallOfFame(4, test)

  top4.add(['Bob', 99])
  top4.list //[\'Bob: 88\', \'Kim: 88\', \'Zoe: 88\']

  //для проверки

var top5 = new HallOfFame(); 
  // ... create an empty Hall of size 5 (by default)
  
top5.add(["A",4]).add(["E",3]).add(["I",1])
  // ... add 3 players
  
top5.list //--> ["A: 4","E: 3","I: 1","",""] 
  // ... 2 "empty players" at the end of list

top5.add(["S",5]).add(["T",7])
top5.list //--> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
  // ... 2 more players, no more "empty slot"
  
top5.add(["A", 25]).list //--> ["A: 25","T: 7","S: 5","E: 3","I: 1"]
  // ... add "A" with a new (better) score then it moves to 1st place !
  
top5.add(["T", 6]).list// --> ["A: 25","T: 7","S: 5","E: 3","I: 1"]
  // ... try to add "S" with a lesser score then no change !  


  //-----------------------------------------------------------------------------------------------
  //https://www.codewars.com/kata/53d628de83db278fb1000710

//   Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.
// To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS) into the String class that simply calls the upcase method (toUpperCase() in Javascript), so that:


String.prototype.myNewMethod = function() {
  return this.toUpperCase();
}

"abc".myNewMethod(); //returns "ABC"

//--------------------------------------------------------------------------------------------------------
//https://www.codewars.com/kata/535c1c80cdbf5011e600030f

// A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
// becomes:
// K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z
// such that:

cipher.encode('ABCHIJ') == 'KEYABC'
cipher.decode('KEYABC') == 'ABCHIJ'

//решение

function KeywordCipher(abc, keyword) {
  
  //делаем encoded алфавит = keyword + оставшиеся буквы условием и циклом
  let abc2 = '';//это то, что после keyword в новом алфавите будет

  //убираем в keyword повторы
  let keywordUpd = '';
  for (let i = 0; i < keyword.length; i += 1) {
    if (!(keywordUpd.includes(keyword[i]))) {
      keywordUpd += keyword[i];
    }
  }
  //делаем encoded алфавит
  for (let i = 0; i < abc.length; i += 1) {
    if (!keywordUpd.includes(abc[i])) {
      abc2 = abc2 + abc[i];
    }
  }
  this.encodedAbc = keywordUpd + abc2;//encodedAbc это уже второй алфавит целиком
  

  this.encode = function (str) {

    let encodeResult = '';
    //let abcUpperCase = abc.toUpperCase();//заглавная версия обычного алфавита
    
    for (let i = 0; i < str.length; i += 1) {

      if (abc.includes(str[i])) {//если найдено в обычном алфавите
        encodeResult += this.encodedAbc[abc.indexOf(str[i])];
      } else if (abc.toUpperCase().includes(str[i])) { //если найдено в заглавной версии алфавита
        encodedAbcUpperCase = this.encodedAbc.toUpperCase();//заглавная версия encoded алфавита
        encodeResult += encodedAbcUpperCase[abc.toUpperCase().indexOf(str[i])];
      } else {//если нигде не найдено - просто добавляем символ в результат
        encodeResult += str[i];
      }
      
    }
    return encodeResult;
  }

  this.decode = function (str) {
    let decodeResult = '';

    for (let i = 0; i < str.length; i += 1) {
      if (this.encodedAbc.includes(str[i])) {
        decodeResult += abc[this.encodedAbc.indexOf(str[i])];
      } else if (this.encodedAbc.toUpperCase().includes(str[i])) {
        abcUpperCase = abc.toUpperCase();//заглавная версия обычного алфавита
        encodedAbcUpperCase = this.encodedAbc.toUpperCase();//заглавная версия encoded алфавита
        decodeResult += abcUpperCase[encodedAbcUpperCase.indexOf(str[i])];
      } else {
        decodeResult += str[i];
      }
    }
    return decodeResult;
  }

}

let abc = "abcdefghijklmnopqrstuvwxyz";
let key = "purplepineapple";
let cipher = new KeywordCipher(abc, key);
cipher.encode('xyz')// == 'xyz'
//cipher.decode('KEYABC')// == 'ABCHIJ'
