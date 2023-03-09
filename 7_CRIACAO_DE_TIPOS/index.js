"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: 'Golf', engine: 1.6, color: 'Silver' };
const myPen = { name: 'BIC', engine: false, color: 'Blue' };
//const anotherPen: Pen = { name: 'BIC', engine: 2.0, color: 'Blue' };
console.log('myCar =>', myCar);
console.log('myPen =>', myPen);
// 4 - Type parameters
//makes sure the key(2nd parameter) the function takes exists in the object(1st parameter)
function getSomeKey(obj, key) {
    return `The key "${String(key)}" exists in the object and have the value of "${obj[key]}".`;
}
const server = {
    hd: '2TB',
    ram: '64GB',
};
//console.log(getSomeKey(server, 'storage'));
console.log(getSomeKey(server, 'ram'));
const myPerson = {
    name: 'John',
    age: 36,
    isDeveloper: false,
};
function showObjectKey(obj, key) {
    console.log(`The key we got was "${key}" and its value in the object is "${obj[key]}"`);
}
// this will not be allowed since Person does not have that property
// showObjectKey(myPerson, 'hasDrivingLicense');
showObjectKey(myPerson, 'isDeveloper');
// 6 - typeof type operator
const userName = 'Matheus';
const userName2 = 'João';
const userName4 = 'Joaquim';
const myTruck = {
    km: 177000,
    brand: 'Volvo',
};
const myVeicle = {
    km: 220000,
    brand: 'VW',
};
function showVeicleKm(km) {
    console.log(`This veicle have currently ${km} kilometers.`);
}
//showVeicleKm(myTruck.brand);
showVeicleKm(myTruck.km);
showVeicleKm(myVeicle.km);
