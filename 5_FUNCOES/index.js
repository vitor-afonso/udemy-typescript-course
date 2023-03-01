"use strict";
// 1 - funcoes sem retorno
function withoutReturn() {
    console.log('Não tem retorno');
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greet(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, username) {
    console.log('Aguarde por favor...');
    const greetStr = f(username);
    console.log(greetStr);
    //return 4
}
preGreeting(greet, 'Casemiro');
preGreeting(greet, 'Fernando');
// 3 - generic function
const printElement = (arr) => {
    return arr[0];
};
console.log(printElement([1, 2, 3]));
console.log(printElement(['a', 'b', 'c']));
//console.log(printElement('not an array'))
const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2,
    };
};
const newObject = mergeObjects({ name: 'Fernando' }, { age: 77, country: 'United States' });
console.log(newObject);
// 4 - constraints
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber(3, 8));
console.log(biggestNumber('5', '12'));
//console.log(biggestNumber('12', 7));
