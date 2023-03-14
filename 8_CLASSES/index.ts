// 1 - campos em classes

// we use "!" to allow us to define properties without value

class User {
  name!: string;
  age!: number;
}

const person = new User();

console.log(person); // => User{}

// we can't assign "job" to "person" because it's not defined in the class
// person.job = 'Peixeiro'

person.name = 'Fernando';

console.log(person); // => User{name: 'Fernando'}

// 2 - constructur

class Person {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//const anotherPerson = new Person('Cristiano')

const newPerson = new Person('Fernando', 54);

console.log(newPerson);

// 3 - campo readonly

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
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
  language;

  constructor(language: string | string[]) {
    this.language = language;
  }
}
class SeniorDev extends JuniorDev {
  level;

  constructor(language: string | string[], level: number) {
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
  name;

  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
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
  name;
  surname;

  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) return;
    this.x = x;
  }
  set fillY(y: number) {
    if (y === 0) return;
    this.y = y;
  }
}

const myCoords = new Coords();

myCoords.fillX = 0;
myCoords.fillY = 15;

console.log(myCoords);

myCoords.fillX = 7;

console.log(myCoords);

// 9 - implements

// Allow us to define that the classes that implements(inherits)
// from  this interface must have a itemTitle method that return a string

interface ShowTitle {
  itemTitle(): string;
}

class BlogPost implements ShowTitle {
  title;
  constructor(title: string) {
    this.title = title;
  }
  // must return something because we defined it in the interface
  itemTitle() {
    return `Titulo do post: ${this.title}`;
  }
}

class MyBook implements ShowTitle {
  title;
  constructor(title: string) {
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
  public x = 10;
}

// D inherits and can access everything
// that is public in C as if it belonged to D
class D extends C {}

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x);
console.log(dInstance.x);
