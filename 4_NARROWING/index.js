"use strict";
// 1- type guard
const sum = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(Number(a) + Number(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Error! Impossible to perform the sum.');
    }
};
sum('5', '72');
sum(2, 5);
sum(12, '25');
// 2 - checando se valor existe
const operations = (someArr, operation) => {
    if (operation) {
        if (operation === 'sum') {
            const sumResult = someArr.reduce((num, total) => num + total);
            console.log({ sumResult });
        }
        else if (operation === 'multiply') {
            const multiplyResult = someArr.reduce((num, total) => num * total);
            console.log({ multiplyResult });
        }
    }
    else {
        console.log('Please define operation.');
    }
};
operations([3, 5, 7]);
operations([3, 5, 7], 'sum');
operations([3, 5, 7], 'multiply');
// 3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const bobby = new Dog('Bobby', 'rottweiler');
const farrusco = new Dog('Farrusco');
function getDogDetails(dog) {
    if ('breed' in dog) {
        console.log(dog);
        console.log(`${dog.name} é um ${dog.breed}.`);
    }
    else {
        console.log(dog);
        console.log(`${dog.name} é um rafeiro.`);
    }
}
getDogDetails(bobby);
getDogDetails(farrusco);
