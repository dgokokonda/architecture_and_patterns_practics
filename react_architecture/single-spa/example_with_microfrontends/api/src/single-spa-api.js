import { registerApplication, start } from "single-spa";

// API service for providing mock data
class ApiService {
  constructor() {
    this.people = [
      { id: 1, name: "Иван Иванов", age: 30, profession: "Разработчик" },
      { id: 2, name: "Мария Петрова", age: 25, profession: "Дизайнер" },
      { id: 3, name: "Алексей Сидоров", age: 35, profession: "Менеджер" },
      { id: 4, name: "Елена Козлова", age: 28, profession: "Аналитик" },
      { id: 5, name: "Дмитрий Волков", age: 32, profession: "Тестировщик" },
    ];

    this.animals = [
      { id: 1, name: "Лев", type: "Хищник", habitat: "Саванна" },
      { id: 2, name: "Слон", type: "Травоядное", habitat: "Джунгли" },
      { id: 3, name: "Орел", type: "Хищник", habitat: "Горы" },
      { id: 4, name: "Дельфин", type: "Хищник", habitat: "Океан" },
      { id: 5, name: "Кенгуру", type: "Травоядное", habitat: "Пустыня" },
    ];
  }

  async getPeople() {
    // Simulate API delay
    console.log("getPeople");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("people", this.people);
        resolve({ data: this.people });
      }, 300);
    });
  }

  async getPerson(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const person = this.people.find((p) => p.id === parseInt(id));
        resolve({ data: person });
      }, 200);
    });
  }

  async getAnimals() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: this.animals });
      }, 300);
    });
  }

  async getAnimal(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const animal = this.animals.find((a) => a.id === parseInt(id));
        resolve({ data: animal });
      }, 200);
    });
  }
}

// Export API service as a global service
window.apiService = new ApiService();

export async function bootstrap(props) {
  console.log("API service bootstrapped");
}

export async function mount(props) {
  console.log("API service mounted");
}

export async function unmount(props) {
  console.log("API service unmounted");
}
