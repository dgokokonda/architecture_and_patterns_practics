// DRY — Don't repeat yourself ("Не повторяйся")
// «Каждая единица знания должна иметь единственное, непротиворечивое и авторитетное представление в рамках системы»
// «Every piece of knowledge must have a single, unambiguous, authoritative representation within a system»

// Избегайте копирования кода.
// Выносите общую логику.
// Прежде чем добавлять функционал, проверьте в проекте, может, он уже создан.
// Константы.

// Пример #1
// bad: дублирование логики валидации
function createUser(userData) {
  if (!userData.email || !userData.email.includes("@")) {
    throw new Error("Invalid email");
  }

  if (!userData.password || !userData.password.length < 6) {
    throw new Error("Password is too short");
  }
}

function updateUser(userId, userData) {
  if (!userData.email || !userData.email.includes("@")) {
    throw new Error("Invalid email");
  }

  if (!userData.password || !userData.password.length < 6) {
    throw new Error("Password is too short");
  }
  // ...
}

// good: общая логика вынесена в функцию

function validateUserData(userData) {
  if (!userData.email || !userData.email.includes("@")) {
    throw new Error("Invalid email");
  }

  if (!userData.password || !userData.password.length < 6) {
    throw new Error("Password is too short");
  }
  // ...
}

function createUser(userData) {
  validateUserData(userData);
  // ...
}

function updateUser(userData) {
  validateUserData(userData);
  // ...
}

// Example #2
// Bad:
const printOdd = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
};

const printEven = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};

printOdd([1, 2, 3, 4, 5]);
printEven([1, 2, 3, 4, 5]);

// Good:
const printNumbers = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      console.log(array[i]);
    }
  }
};

printNumbers([1, 2, 3, 4], (x) => x % 2 !== 0); // odd numbers

printNumbers([1, 2, 3, 4], (x) => x % 2 === 0); // even numbers
