// 1- type guard

const sum = (a: number | string, b: number | string) => {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(Number(a) + Number(b));
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  } else {
    console.log('Error! Impossible to perform the sum.');
  }
};

sum('5', '72');
sum(2, 5);
sum(12, '25');

// 2 - checando se valor existe

const operations = (someArr: number[], operation?: string | undefined) => {
  if (operation) {
    if (operation === 'sum') {
      const sumResult = someArr.reduce((num, total) => num + total);
      console.log({ sumResult });
    } else if (operation === 'multiply') {
      const multiplyResult = someArr.reduce((num, total) => num * total);
      console.log({ multiplyResult });
    }
  } else {
    console.log('Please define operation.');
  }
};

operations([3, 5, 7]);
operations([3, 5, 7], 'sum');
operations([3, 5, 7], 'multiply');

// 3 - instanceof
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User('Jhon');
const paul = new SuperUser('Paul');

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados?`);
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}!`);
  }
}

userGreeting(jhon);
userGreeting(paul);

// 4 - operador in

class Dog {
  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
  name;
  breed?;
}

const bobby = new Dog('Bobby', 'rottweiler');
const farrusco = new Dog('Farrusco');

function getDogDetails(dog: Dog) {
  if ('breed' in dog) {
    console.log(dog);
    console.log(`${dog.name} é um ${dog.breed}.`);
  } else {
    console.log(dog);
    console.log(`${dog.name} é um rafeiro.`);
  }
}

getDogDetails(bobby);
getDogDetails(farrusco);

// 5 - desafio

// function getReview(nota: number | boolean) {
//   if (typeof nota === 'number') {
//     if (nota === 1) {
//       console.log('Muito insatisfeito');
//     }
//     if (nota === 2) {
//       console.log('Insatisfeito');
//     }
//     if (nota === 3) {
//       console.log('Neutro');
//     }
//     if (nota === 4) {
//       console.log('Satisfeito');
//     }
//     if (nota === 5) {
//       console.log('Muito satisfeito');
//     }
//   }
//   if (nota === false) {
//     console.log('Utilizador não deixou review. Devia estar com fome.');
//   }
// }

// getReview(false);
// getReview(1);
// getReview(3);
// getReview(5);

type Review = number | boolean;

function showUserReview(review: Review) {
  if (!review) {
    console.log('Você não avaliou o produto!');
    return;
  }
  console.log(`A nota que você deu foi ${review}, obrigado!`);
}

showUserReview(false);
showUserReview(3);
showUserReview(4);
