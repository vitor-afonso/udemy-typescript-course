// 1 - importação de arquivos

import greeting from './greet';

greeting();

// 2 - import de variavel

import { someVariable } from './variable';

console.log(someVariable);

// 3 - multiplas exportacoes

import { a, b, myExportFunction } from './multiple';

console.log(a);
console.log(b);

myExportFunction();

// 4 - Alias

// Allow as to change the name of the imported variable/function

import { someName as name } from './alias';

console.log(name);

// 5 - import all

import * as numbers from './numbers';

console.log(numbers.n1);

numbers.showNumber();

// 6 - importing types

import { Person } from './myType';

class User implements Person {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const casemiro = new User('Casemiro', 55);

console.log(casemiro);
