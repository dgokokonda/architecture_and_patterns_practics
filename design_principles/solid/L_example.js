// Принцип подстановки Барбары Лисков (The Liskov Substitution Principle)
// Наследники должны повторять поведение родительского класса и должны вести себя без сюрпризов.
// т.е. условно выбирать правильные слои абстракции
// классы. использующие базовый класс, должны использовать его подклассы (подтипы), т.е. использовать общий интерфейс вместо наследования

// базовый слой абстракции
class Person {
  access() {}
}

// новый слой абстракции
class Employee extends Person {
  access() {
    console.log("You have access");
  }
}

// новый слой абстракции
class Guest extends Person {
  isGuest = true;
}

class Frontend extends Person {
  makeFrontend() {}
}

class Backend extends Person {
  makeBackend() {}
}

// class PersonFromAnotherCompany extends Person {
class PersonFromAnotherCompany extends Guest {
  access() {
    throw new Error("No access"); // нарушение принципа
  }
}

function noAccess(person) {
  person.access();
}

const frontend = new Frontend();
noAccess(frontend);
noAccess(new Backend());
// noAccess(new PersonFromAnotherCompany());
