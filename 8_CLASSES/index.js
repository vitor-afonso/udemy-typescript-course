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
