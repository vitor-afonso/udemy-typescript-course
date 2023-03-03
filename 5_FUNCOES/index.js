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
// 4 - generic with constraints
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
// 5 - especificar tipo de argumento
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
const newArr = mergeArrays([1, 2, 3], ['a', 'b']);
console.log(newArr);
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}!`;
}
console.log(modernGreeting('Casemiro', 'Sr.'));
console.log(modernGreeting('Fernando'));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 20));
// 8 - unknown
function doSomething(x) {
    //console.log(x[0])
    // unknown does not let us do more advance operations without narrowing it
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log(`${x} é um numero.`);
    }
    else {
        console.log('X não é numero nem é array.');
    }
}
doSomething(8);
doSomething([1, 2, 3]);
// 9 - never
function showErrorMsg(msg) {
    throw new Error(msg);
}
// showErrorMsg('Algo deu errado!')
// 10 - rest operator como parametro
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(4, 5, 6));
// 11 - destructuring como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e o seu preço é €${price}`;
}
const shirt = { name: 'Camisa', price: 59.99 };
console.log(showProductDetails(shirt));
