"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
// numbers.push('Casemiro');
numbers.push(7);
console.log(numbers[3]);
const nomes = ['Casemiro', 'Manel'];
//nomes.push(5);
// 2 - syntax antiga de array
const nums = [100, 200];
numbers.push(300);
//numbers.push('Casemiro');
console.log(nums);
// 3 - any (não devo usar)
const arr = [1, 'teste', true, { nome: 'Malaquias' }];
console.log(arr);
arr.push([1, 2, 3]);
console.log(arr);
// 4 - parametro de funcao
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma('ads', 1)
// 5 - retorno de funcao
function greeting(name) {
    //return 5
    return `Olá ${name}!`;
}
console.log(greeting('Fernando'));
// 6 - funcoes anonimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
}, 100);
// 7 - tipos de objetos
const passCoordinates = (coord) => {
    console.log('X coordinates: ', coord.x);
    console.log('Y coordinates: ', coord.y);
};
const objCoord = { x: 312, y: 47.5 };
// passCoordinates(x: 312, y: 47.5);
passCoordinates(objCoord);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
// showNumbers(1)
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    console.log(`Olá, ${firstName}, tudo bem?`);
}
advancedGreeting('Casemiro', 'Teixeira');
advancedGreeting('Jacinto');
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é €${balance}`);
}
showBalance(500);
showBalance('100');
// const testArr: string[] | number[] = [1, '2']
const arr2 = [3, '4'];
// 11 - mais sobre union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        console.log('Usuário não aprovado!');
        return;
    }
    console.log(`O usuário é um: ${role}`);
}
showUserRole(false);
showUserRole('Admin');
showUserRole('Editor');
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId('15');
showId(20);
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Sobrenome: ${user.surname}`);
}
userDetails({ name: 'Casemiro', surname: 'Teixeira' });
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const itemCoords = {
    x: 10,
    y: 15,
    z: 12,
};
showCoords(itemCoords);
const somePerson = { name: 'Casemas', age: 77 };
console.log(somePerson);
// 15 - literal types
function showDirection(direction) {
    console.log(`The direction is: ${direction}`);
}
//showDirection("up")
showDirection('left');
showDirection('center');
// 16 - non-null assertion
const p = document.getElementById('some-p');
//console.log(p.innerText);
console.log(p.innerText);
// 17 - big int
let n;
// n = 1
n = 1000n;
// console.log(n + 1)
console.log(n + 100n);
