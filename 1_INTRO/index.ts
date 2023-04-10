const firstName = 'Casemiro';
const anotherName = 1;
const x = true;

const greeting = (name: string) => {
  console.log('Hello ' + name);
};

greeting(firstName);
// greeting(anotherName);
// greeting(x);

/*********** DESAFIO 1 **********/

// The challenge here is to create a function that (exclusively) takes 2 arguments of type number, adds them and returns the result

const firstNum = 7;
const secondNum = 21;

const sumNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

const result = sumNumbers(firstNum, secondNum);

console.log({ result });
