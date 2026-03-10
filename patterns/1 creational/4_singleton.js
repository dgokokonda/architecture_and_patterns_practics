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
// ================================

// Более корректный вариант
class Database {
  private static instance: Database | null = null;
  private data: any;
  
  // Приватный конструктор - нельзя создать через new снаружи
  private constructor(data: any) {
    this.data = data;
  }
  
  // Статический метод для получения экземпляра
  public static getInstance(data?: any): Database {
    if (!Database.instance) {
      Database.instance = new Database(data);
    }
    return Database.instance;
  }
  
  public getData() {
    return this.data;
  }
}

// Использование
const db1 = Database.getInstance({ users: [] });
const db2 = Database.getInstance();
console.log(db1 === db2); // true - один экземпляр
