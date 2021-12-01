'use strict'

//-------------------------------------------------------------------------------------
//  https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//решение 

function countSheeps(arrayOfSheep) {
  let resultArray = arrayOfSheep.filter(item => item === true);
  return resultArray.length;
}


//-------------------------------------------------------------------------------------
//  https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

//решение

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//-------------------------------------------------------------------------------------
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
//348597 => [7,9,5,8,4,3]

//решение

function digitize(n) {
  let resultArrayStrings = String(n).split('').reverse();
  let resultArray = resultArrayStrings.map(item => Number(item));
  return resultArray;
}

//-------------------------------------------------------------------------------------
// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript

// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).
function logicalCalc(array, op){
  //если значение в массиве одно
  if (array.length === 1) {
    return array[0];
  }
  //если не одно.
  let x = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (op === 'OR') {
      x = x || array[i]; 
    } else if (op === 'AND') {
      x = x && array[i];
    } else if (op === 'XOR') {
      x = x ^ array[i];
    }
    
  }
  return Boolean(x);
}


//-------------------------------------------------------------------------------------
//  https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

// Write a function to get the first elements of asequence. 
//Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

//решение
function first(arr, n) {
  if (n === undefined) {
    return arr.slice(0, 1);
  }
  return arr.slice(0, n);
}

//---------------------------------------------------------------------------------
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let array = x.split('');
  let resultArray = array.filter (item => item != ' ')
console.log(resultArray)
  return resultArray.join('')
}

//---------------------------------------------------------------------------------
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//короче объединить 2 массива, чтобы не было дубликатов и в результирующем было все по возрастанию

//решение 
function mergeArrays(arr1, arr2) {
  let resultArray = arr1;
  
  arr2.forEach(item => {
    if (!(resultArray.includes(item))) {
      resultArray.push(item);
    }
  });
  
  return resultArray.sort((a, b) => a - b)
}