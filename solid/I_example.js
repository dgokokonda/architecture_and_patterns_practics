// The Interface Segregation Principle (Принцип разделения интерфейса)
// Много мелких интерфейсов лучше, чем один большой. Декомпозиция

class Animal {
  constructor(name) {
    this.name = name;
  }

  // go() {}
  // voice() {}
  // run() {}
  // fly() {}
}

const flier = {
  fly() {
    console.log(this.name + " flies");
  },
};

const walker = {
  go() {
    console.log(this.name + " goes");
  },
};

const voicer = {
  voice() {
    console.log("aaaaaaaaaaaa");
  },
};

class Dog extends Animal {}

class Eagle extends Animal {}

Object.assign(Dog.prototype, walker, voicer);
Object.assign(Eagle.prototype, flier, voicer);
const dog = new Dog("Bob");
// dog.go();
// dog.fly();

const eagle = new Eagle("Petya");

// dog.fly();
dog.voice();
