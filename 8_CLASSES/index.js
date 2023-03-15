"use strict";
// 1 - campos em classes
// we use "!" to allow us to define properties without value
class User {
}
const person = new User();
console.log(person); // => User{}
// we can't assign "job" to "person" because it's not defined in the class
// person.job = 'Peixeiro'
person.name = 'Fernando';
console.log(person); // => User{name: 'Fernando'}
// 2 - constructur
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//const anotherPerson = new Person('Cristiano')
const newPerson = new Person('Fernando', 54);
console.log(newPerson);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const myCar = new Car('golf');
console.log(myCar);
// myCar.wheels = 5
myCar.name = 'Punto GTI';
console.log(myCar);
// 4 - extends and super
class JuniorDev {
    constructor(language) {
        this.language = language;
    }
}
class SeniorDev extends JuniorDev {
    constructor(language, level) {
        super(language);
        this.level = level;
    }
}
const person1 = new JuniorDev('Javascript');
const person2 = new SeniorDev(['Javascript', 'NodeJs'], 4);
console.log(person1);
console.log(person2);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey Stranger!');
    }
}
const jimmy = new Dwarf('Jimmy');
jimmy.greeting();
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const myTruck = new Truck('Volvo', 400);
myTruck.showDetails();
// 7 - getter
class Guy {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const casemiroTeixeira = new Guy('Casemiro', 'Teixeira');
// console.log(casemiroTeixeira.fullName())
console.log(casemiroTeixeira.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
    }
}
const myCoords = new Coords();
myCoords.fillX = 0;
myCoords.fillY = 15;
console.log(myCoords);
myCoords.fillX = 7;
console.log(myCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    // must return something because we defined it in the interface
    itemTitle() {
        return `Titulo do post: ${this.title}`;
    }
}
class MyBook {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do livro: ${this.title}`;
    }
}
const myPost = new BlogPost("A day in a dev's shoes");
const myBook = new MyBook('Manxi lomba na catchupa!');
console.log(myPost.itemTitle());
console.log(myBook.itemTitle());
// 10 - override de métodos
class Base {
    someMethod() {
        console.log('Alguma coisa!');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('Alguma outra coisa!');
    }
}
const myNewClass = new Nova();
myNewClass.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
// D inherits and can access everything
// that is public in C as if it belonged to D
class D extends C {
}
const cInstance = new C();
const dInstance = new D();
console.log(cInstance.x);
console.log(dInstance.x);
// 12 - protected
// Properties of E can only be accessed by subclasses and throught methods
class E {
    constructor() {
        this.x = 7;
    }
    protectedMethod() {
        console.log('Sum x =>', this.x + this.x);
    }
}
class F extends E {
    // used to be able to access x
    showX() {
        console.log('fInstance.showX =>', this.x);
    }
    // used to be able to access protectedMethod
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const eInstance = new E();
//this will not work because it can only be accessed throught a method fom a subClass
// console.log(eInstance.x)
// eInstance.protectedMethod();
const fInstance = new F();
//this will not work because it can only be accessed throught a method
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private
// Properties of PrivateClass can only be accessed by non private methods within it's own class
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        console.log(this.name);
    }
    privateMethod() {
        console.log('I am private!');
    }
    showPrivateMethodResult() {
        this.privateMethod();
    }
}
const pClass = new PrivateClass();
pClass.showName();
pClass.showPrivateMethodResult();
class TestingPrivate extends PrivateClass {
    myMethod() {
        // this.privateMethod()
    }
}
// 14 - static members
// Properties and methods from a class that can be accessed without having to create an object.
// We access the class directly
class StaticMembers {
    static staticMethod() {
        console.log('Este método é static!');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic class
//Allow us to define the type of the properties at time of creation of the instance(object)
class Item {
    //here its being defined that the types will be whatever the type of the argument is
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    showFirst() {
        console.log('First item =>', this.first);
    }
}
const myItem = new Item('Caneta', 7);
myItem.showFirst();
console.log('typeof first =>', typeof myItem.first);
console.log('typeof second =>', typeof myItem.second);
// 16 - parameter properties
// Allow us to define visibility (public, private, protected) and type,
// all in the constructor without having to define the visibility before
// like in the previous examples
class ParameterClass {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: R$${this.price}`;
    }
}
const newShirt = new ParameterClass('Camisa', 5, 19.99);
console.log(newShirt.showQty);
// console.log(newShirt.qty)
