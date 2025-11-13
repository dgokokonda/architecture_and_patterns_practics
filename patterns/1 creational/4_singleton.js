// только один экземпляр класса и только одна точка доступа
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

// только один инстанс класса - суть синглтона
const mongo = new Database("MongoDB");
console.log(mongo.getData());

const mysql = new Database("MySQL");
console.log(mysql.getData()); // вернет также 'MongoDB'
