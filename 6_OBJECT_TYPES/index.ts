// 1 - tipo de objeto para funções

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name}, o preço é €${product.price}`);
  if (product.isAvailable) {
    console.log('Este produto está disponível!');
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 29.99,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`);
  if (user.role) {
    console.log(`Sua função no sistema é de: ${user.role}`);
  }
}

const u1 = { email: 'manel@teste.com', role: 'Admin' };
const u2 = { email: 'fernando@teste.com' };

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly

// not possible to change value of key after initialization

interface Car {
  brand: string;
  readonly wheels: number;
}

const golfIV: Car = {
  brand: 'VW',
  wheels: 4,
};

// golfIV.wheels = 5

// 4 - index signature

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

// coords.z = 'teste'

coords.y = 15;

console.log(coords);

interface OnlyNumberArray {
  [index: number]: number;
}

const arr1: OnlyNumberArray = [1, 2, 3];
// const arr2: OnlyNumberArray = ['1', '2', '3']

// 5 - extending types

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
};

console.log(goku);
console.log(goku.superpowers[0]);

// 6 - intersection types

interface Person {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type PersonWithGun = Person & Gun;

const arnold: PersonWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
};

console.log(arnold);

// 7 - read only array

let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Pêra'];

// myArray[3] = 'Mamão'

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// 8 - tuplas

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = ["teste", 1]

type nameAndAge = [string, number];

const anotherUser = ['Fernando', 53];

anotherUser[1] = 'Manel';

console.log(anotherUser);

// 9 - tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0]);
  console.log(numbers[1]);
}

// showNumbers(['teste', 1])
showNumbers([7, 8]);
