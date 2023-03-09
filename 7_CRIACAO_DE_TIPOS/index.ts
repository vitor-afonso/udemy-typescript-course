// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData('teste'));

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };

console.log(showProductName(myObj));
console.log(showProductName(secondObj));
// console.log(showProductName(thirdObj))

// 3 - generics com interface

interface MyObject<T, U> {
  name: string;
  engine: T;
  color: U;
}

//here we extend MyObject
//and set the type only for the keys that have as type generics(T,U),
//because the "name" key already have a type string
type Car = MyObject<number, string>;
type Pen = MyObject<boolean, string>;

const myCar: Car = { name: 'Golf', engine: 1.6, color: 'Silver' };
const myPen: Pen = { name: 'BIC', engine: false, color: 'Blue' };
//const anotherPen: Pen = { name: 'BIC', engine: 2.0, color: 'Blue' };

console.log('myCar =>', myCar);
console.log('myPen =>', myPen);

// 4 - Type parameters

//makes sure the key(2nd parameter) the function takes exists in the object(1st parameter)

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `The key "${String(key)}" exists in the object and have the value of "${obj[key]}".`;
}

const server = {
  hd: '2TB',
  ram: '64GB',
};

//console.log(getSomeKey(server, 'storage'));
console.log(getSomeKey(server, 'ram'));

// 5 - keyof type operator

// allow us, just like in the previous lesson,
// to create a type based on the type of the keys of a specific object or array

type Person = { name: string; age: number; isDeveloper: boolean };

type P = keyof Person;

const myPerson = {
  name: 'John',
  age: 36,
  isDeveloper: false,
};

function showObjectKey(obj: Person, key: P) {
  console.log(`The key we got was "${key}" and its value in the object is "${obj[key]}"`);
}

// this will not be allowed since Person does not have that property
// showObjectKey(myPerson, 'hasDrivingLicense');

showObjectKey(myPerson, 'isDeveloper');

// 6 - typeof type operator

const userName: string = 'Matheus';

const userName2: typeof userName = 'João';

// const userName3: typeof userName = 3

type x = typeof userName;

const userName4: x = 'Joaquim';

// 7 - indexed access types

// allow us to create a type based on a specific key of an object or array

type Truck = { km: number; brand: string };

type Km = Truck['km'];

const myTruck: Truck = {
  km: 177000,
  brand: 'Volvo',
};

const myVeicle: Truck = {
  km: 220000,
  brand: 'VW',
};

function showVeicleKm(km: Km) {
  console.log(`This veicle have currently ${km} kilometers.`);
}

//showVeicleKm(myTruck.brand);

showVeicleKm(myTruck.km);

showVeicleKm(myVeicle.km);

// 8 - conditional types

interface A {}
interface B extends A {}

type someType = B extends A ? number : string; // number

// const someVariable: someType = "testing";

const someVariable: someType = 77;

//EX.2

interface C {
  showName(): string;
}

type showNameType1 = C extends { showNumber(): number } ? number : boolean; //boolean

type showNameType2 = C extends { showName(): string } ? string : boolean; //string

//because is expecting a boolean it gives error
// const someName1: showNameType1 = "Casemiro";

const someName: showNameType2 = 'Casemiro';

// 9 - template literal types

// allow us to add text as the type,
// meaning that it will only accept that exact value match
// template literals allow for a infinity possibilities when that text depende on a variable

type TestA = 'text';

type CustomType = `some ${TestA}`;

//const testing1: CustomType = "some other text"

const testing: CustomType = 'some text';

// EX.2

type A1 = 'Testing';
type A2 = 'Union';
type A3 = `${A1}` | `${A2}`;

// const testError: A3 = 'Some other string';
const test1: A3 = 'Testing';
const test2: A3 = 'Union';
