"use strict";
// 1 - Numbers
let someNum = 10;
someNum = 15;
console.log(typeof someNum);
const y = 3.14329492349;
console.log(y.toPrecision(3));
// 2 - string
const someName = 'Matheus';
console.log(someName.toUpperCase());
const lastName = 'Battisti';
let fullName;
fullName = someName + ' ' + lastName;
console.log(fullName);
// 3 - boolean
let a = true;
console.log(typeof a);
a = false;
// 4 - inference e annotation
let ann = 'Annotation';
let inf = 'Inference';
// inf = 3
// ann = 5
inf = 'Some other string';
// 5 - compile automatico
let q = 10;
console.log(q);
q = 11;
console.log(q);
// 6 - desafio 2
/*********** DESAFIO 2 **********/
// Create a variable that takes a number
// Convert the number to a string in a new variable
// This new variable should be typed by inference
// Print the new variable in another text using template strings
const luckyNumber = 7;
const convertedNumber = String(luckyNumber);
const someText = `The number ${convertedNumber} is my lucky number!`;
console.log(someText);
