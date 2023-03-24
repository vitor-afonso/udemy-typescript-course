function myDecorator() {
  console.log('A iniciar o decorator...');
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('A executar decorator...');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  name!: string;
  //decorator will be associated with "testing" not "name"
  @myDecorator()
  testing() {
    console.log('A terminar execução do metodo');
  }
}

const myObj = new myClass();

myObj.testing();

// 2 - multiplos decorators

// At execution time, the order of the decorators is inverted
function a() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Executou a');
  };
}

function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Executou b');
  };
}

class MultipleClass {
  @a()
  @b()
  testing() {
    console.log('Terminando execução do método');
  }
}

const multiple = new MultipleClass();

multiple.testing();

// 3 - class decorator

function classDecorator(constructor: Function) {
  console.log(constructor);
  if (constructor.name === 'User') {
    console.log('Creating user...');
  }
}

@classDecorator
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const myUser = new User('Casemiro');

console.log(myUser);

// 4 - method decorator

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
  // sets the descriptor enumerable to false
  // enumerable defines if the property can or not be iterated with a for loop for example.
  @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine('Trator');

console.log(trator);
console.log(trator.showName());

// 5 - acessor decorator

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster('Charmander', 10);

console.log(charmander);

// 6 - property decorator

function formatNumberDecorator() {
  return function (target: object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0');
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Id {
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const myId = new Id('7');

console.log(myId);
