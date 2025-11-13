// создает оболочку для различных интерфейсов для использования разных алгоритмов и интерфейсов в конкретной задаче, т.е. задает семейство алгоритмов

class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

// стратегия 1
class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

// стратегия 2
class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

// стратегия 3
class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

// оболочка взаимодействия со стратегиями
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();

console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
