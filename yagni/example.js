// YAGNI (You Ain't Gonna Need It) - Вам это не понадобится
// Плохой код: реализация функциональности на будущее

// Пример #1
// Bad: может не понадобиться
class UserService {
  constructor() {
    this.cache = new Map();
    this.metrics = new MetricsCollctor();
    this.backupService = new BackupService();
  }

  getUser(id) {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    const user = database.getUser(id);
    this.cache.set(id, user);
    this.metrics.recordCacheMiss();
    return user;
  }

  async exportToCSV() {}
}

// Good: реализация только текущих требований
class UserService {
  constructor() {
    this.cache = new Map();
  }

  getUser(id) {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    const user = database.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}
