"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log('A iniciar o decorator...');
    return (target, propertyKey, descriptor) => {
        console.log('A executar decorator...');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    //decorator will be associated with "testing" not "name"
    testing() {
        console.log('A terminar execução do metodo');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
// At execution time, the order of the decorators is inverted
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou b');
    };
}
class MultipleClass {
    testing() {
        console.log('Terminando execução do método');
    }
}
__decorate([
    a(),
    b()
], MultipleClass.prototype, "testing", null);
const multiple = new MultipleClass();
multiple.testing();
// 3 - class decorator
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Creating user...');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const myUser = new User('Casemiro');
console.log(myUser);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    // sets the descriptor enumerable to false
    // enumerable defines if the property can or not be iterated with a for loop for example.
    showName() {
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator);
console.log(trator.showName());
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster('Charmander', 10);
console.log(charmander);
