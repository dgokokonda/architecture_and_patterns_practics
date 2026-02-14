// ООП - парадигма императивного стиля, характеризуется 4 принципами/ аспектами:


// 1. НАСЛЕДОВАНИЕ - возможность создавать классы на основе других классов.
// Умение объекта «забирать по наследству» свойства или характеристики от объектов-родителей.
// Наследование на основе прототипа/класса через extends, super.

class Enemy {
  constructor(power) {
    this.power = power
  }

  // лучше избегать стрелочных функций при наследовании
  attack() { console.log(`I'm attacking with a power of ${this.power}!`) }
}

// 1.1 метод родителя доступен по умолчанию при наследовании
class Alien extends Enemy {
  constructor(name, power) {
    super(power) // указываем свойства родителя (вызов свойства из родителя)
    this.name = name
    this.species = "alien"
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

const alien = new Alien('Who', 10)
alien.attack() // метод вызван из родителя


// 1.2. метод родителя переопределяем*
class Bug extends Enemy {
  constructor(name, power) {
    super(power) // указываем свойства родителя (вызов свойства из родителя)
    this.name = name
    this.species = "bug"
  }
  attack() {
    console.log("Maximum call stack size exceeded") // без super переопределяем метод родителя
  }
}

const bug = new Bug('eval', 100)
bug.attack() // вызван метод дочернего класса


// 1.3. метод родителя расширяем посредством super, 
// т.е. вызываем метод родителя и дополняем своей логикой
class Robot extends Enemy {
  constructor(name, power) {
    super(power) // указываем свойства родителя (вызов свойства из родителя)
    this.name = name
    this.species = "robot"
  }

  // лучше избегать стрелочных функций при наследовании
  attack() {
    super.attack() // вызов метода родителя
    console.log("Virus has been detected on your device. Your device is blocked.") // дополняем логику
  }
}

const robot = new Robot('eval', 100)
robot.attack() // вызван метод родителя и дочернего класса (расширен метод)
// ..............................................

// 2. ИНКАПСУЛЯЦИЯ.  Данные объекта не должны быть напрямую доступны извне.   
// Инкапсуляция посредством ограничения доступа к свойствам и методам посредством:
// this._a или let или свойство вне конструкторв #, get(), set(), 
// а также с замыканием, weakMap и тд
// Модификаторы доступа в TypeScript - protected, private, public

// Инкапсуляция определяется как связывание данных и методов в единое целое для защиты от доступа извне

class Human {
  #birthYear // объявляем закрытое свойство через #
  // private secret: string = 'секрет'; // ts

  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName
    let _lastName = lastName // приватное свойство, способ 1. Приватные переменные через замыкание
    this.#birthYear = birthYear // присваиваем ему значение

    // Публичные методы имеют доступ к приватным переменным, доступны только в конструкторе
    this.getLastName = function () { return _lastName }

    this.setLastName = function (newName) { _lastName = newName }
  }

  // getName = () => this.firstName

  //  private privateMethod() {  // ✅ private метод
  //   console.log(this.secret); // ✅ доступ внутри класса
  // }

  getFullName() {
    return `${this.firstName} ${this.getLastName()}`
  }

  // Приватный метод
  #getBirthYear() {
    return this.#birthYear
  }

  getAge() {
    return new Date().getFullYear() - this.#birthYear
  }

  _privateMethod() { console.log(1) }

}

const Ivan = new Human('Ivan', 'Ivanov', 1991)
Ivan.firstName // Ivan
Ivan._lastName // undefined =====================================
Ivan.getLastName() // Ivanov ----------------
Ivan.#getBirthYear() // доступен для вызова извне, енсмотря на приватность
Ivan.getAge() // 35

// human.secret;        // ❌ Ошибка: Property 'secret' is private
// human.privateMethod; // ❌ Ошибка: Property 'privateMethod' is private
// --------------------------------------------------------------------------

// 3. ПОЛИМОРФИЗМ. "много форм", 
// умение работать с разными типами объектов или данных. 
// Способность вызывать один метод для разных объектов (поведение будет разным).

class Enemy {
  constructor(name, phrase, power) {
    this.name = name
    this.phrase = phrase
    this.power = power
  }
  // метод 1
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
  constructor(name, phrase, power) {
    super(name, phrase, power)
    this.species = "alien"
  }
  // метод 2
  attack = () => console.log("Now I'm doing a different thing, HA!") // Переопределение родительского метода
}

const enemy = new Enemy('1', '2', 3)
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10)
// Полиморфизм:
alien1.attack() // вывод: "Now I'm doing a different thing, HA!"
enemy.attack() // Вывод: I'm attacking with a power of 3!
// ----------------------------------------------------------------

// 4. АБСТРАКЦИЯ. Тесно связана с инкапсуляцией.
// Мы представляем вовне лишь те свойства и методы, которые собираемся использовать.
// Если же что-то не нужно, то оно не раскрывается.
// т.е. выделение таких характеристик объекта, которые достаточно точно описывают поведение класса, но не вдаются в детали

class User {
  name;
  email;
  #password;
  constructor() { }

  #validateEmail(email) {
    // проверка email на валидность.
    return true;
  }

  #validatePassword(password) {
    // проверка на валидность пароля
    return true;
  }

  // абстракция: метод доступен извне, остальное знать не нужно!
  signUp(name, email, password) {
    let isValidated = false;
    isValidated = this.#validateEmail(email);
    isValidated &&= this.#validatePassword(password);

    if (isValidated) {
      this.name = name;
      this.email = email;
      this.#password = password;
      // добавляем пользователя в базу данных
      console.log('User registered successfuly');
    } else {
      console.log('Please enter correct Details!!');
    }
  }

  // абстракция: метод доступен извне, остальное знать не нужно!
  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  #isRegisteredUser(email) {
    // проверка пользователя на наличие регистрации
    return true;
  }

  // абстракция: метод доступен извне, остальное знать не нужно!
  resetPassword(email, newPassword) {
    if (this.#isRegisteredUser(email)) {
      this.#password = newPassword;
      console.log('Operation performed successfully');
    }
    else {
      console.log('No account found!');
    }
  }
};

const author = new User();
author.signUp('Max Andreyev', 'author@gmail.com', 'password:)'); // User registered successfully

author.#validateEmail('author@gmail.com'); // Syntax Error.

author.login('author@gmail.com', 'password:)'); // Login Successfully
author.resetPassword('author@gmail.com', ''); // Operation performed successfully