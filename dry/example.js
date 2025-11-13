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
