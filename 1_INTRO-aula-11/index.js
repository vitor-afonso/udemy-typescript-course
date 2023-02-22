var firstName = 'Casemiro';
var anotherName = 1;
var x = true;
var greeting = function (name) {
    console.log('Hello ' + name);
};
greeting(firstName);
// greeting(anotherName);
// greeting(x);
/*********** DESAFIO 1 **********/
// The challenge here is to create a function that (exclusively) takes 2 arguments of type number, adds them and returns the result
var firstNum = 7;
var secondNum = 21;
var sumNumbers = function (num1, num2) {
    return num1 + num2;
};
var result = sumNumbers(firstNum, secondNum);
console.log({ result: result });
