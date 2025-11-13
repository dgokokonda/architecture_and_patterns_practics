// The Dependency Inversion Principle (Принцип инверсии зависимостей)
// Зависимость на абстракциях, нет зависимостей на что-то конкретное.
// Верхнеур. не зависят от нижнеур.сущностей. Зависимости выносить в абстракции (отд.сущности)

// низкоуровневый класс
class Fetch {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve("Success response");
  }
}

// низкоуровневый класс
class LocalStorage {
  get() {
    const storageData = "some data"; // data from storage
    return storageData;
  }
}

// абстракция
class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("ya.ru");
  }
}

// абстракция
class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

// высокоуровневый класс
class DataBase {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const fetchDB = new DataBase(new FetchClient());
console.log(fetchDB.getData("some"));
const localStorageDB = new DataBase(new LocalStorageClient());
console.log(localStorageDB.getData("sheet"));
