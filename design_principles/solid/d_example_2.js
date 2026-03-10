// ✅ Правильная инверсия зависимостей

// 1. Абстракция (интерфейс)
interface HttpClient {
  get(url: string): Promise<any>
  post?(url: string, data: any): Promise<any>
}

// 2. Конкретные реализации
class FetchHttpClient implements HttpClient {
  async get(url: string) {
    return fetch(url).then(r => r.json())
  }
}

class AxiosHttpClient implements HttpClient {
  async get(url: string) {
    return axios.get(url).then(r => r.data)
  }
}

class MockHttpClient implements HttpClient {
  async get(url: string) {
    return Promise.resolve({ mock: true, data: 'test' })
  }
}

// 3. Высокоуровневый модуль зависит от абстракции
class UserService {
  constructor(private http: HttpClient) {}
  
  async getUsers() {
    return this.http.get('/api/users')
  }
}

// 4. Легко подменять реализации
const service = new UserService(new FetchHttpClient())
// или
const testService = new UserService(new MockHttpClient())

// Пример во Vue:
import { inject } from 'vue'

// Провайдим абстракцию
const httpClient = new FetchHttpClient()
app.provide('http', httpClient)

// В компоненте используем инъекцию
const UserList = {
  setup() {
    const http = inject<HttpClient>('http')
    const users = ref([])
    
    async function loadUsers() {
      users.value = await http?.get('/users')
    }
    
    return { users, loadUsers }
  }
}
