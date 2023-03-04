"use strict";
// 1 - tipo de objeto para funções
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, o preço é €${product.price}`);
    if (product.isAvailable) {
        console.log('Este produto está disponível!');
    }
}
const shirt = {
    name: 'Camisa',
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: 'manel@teste.com', role: 'Admin' };
const u2 = { email: 'fernando@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const golfIV = {
    brand: 'VW',
    wheels: 4,
};
let coords = {
    x: 10,
};
// coords.z = 'teste'
coords.y = 15;
console.log(coords);
const arr1 = [1, 2, 3];
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpowers[0]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
// 7 - read only array
let myArray = ['Maçã', 'Laranja', 'Pêra'];
// myArray[3] = 'Mamão'
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ['Fernando', 53];
anotherUser[1] = 'Manel';
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
// showNumbers(['teste', 1])
showNumbers([7, 8]);
