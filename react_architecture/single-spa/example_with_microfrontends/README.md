# Single-SPA Example

Пример React-приложения на фреймворке single-spa с несколькими микро-приложениями (микрофронтендами).

## Структура проекта

Проект состоит из следующих микро-приложений:

1. **root-config** (порт 9000) - главное приложение, которое регистрирует и монтирует микрофронты, содержит навигацию
2. **api** (порт 9001) - приложение для работы с API, предоставляет моковые данные в JSON формате
3. **people** (порт 9002) - приложение для отображения списка людей, получает данные через API
4. **animals** (порт 9003) - приложение для отображения списка животных, получает данные через API
5. **styleguide** (порт 9004) - приложение со стилями для всех микрофронтендов
6. **todolist** (порт 9005) - приложение для отображения списка дел, получает данные через API

## Установка

1. Установите зависимости для всех приложений:
```bash
npm run install:all
```

Или установите зависимости для каждого приложения отдельно:
```bash
npm install
cd root-config && npm install
cd ../api && npm install
cd ../people && npm install
cd ../animals && npm install
cd ../styleguide && npm install
cd ../todolist && npm install
```

## Запуск

Запустите все приложения одновременно:
```bash
npm start
```

Или запустите каждое приложение отдельно в разных терминалах:

```bash
# Терминал 1
cd root-config && npm start

# Терминал 2
cd api && npm start

# Терминал 3
cd people && npm start

# Терминал 4
cd animals && npm start

# Терминал 5
cd styleguide && npm start

# Терминал 6
cd todolist && npm start
```

После запуска откройте браузер и перейдите по адресу: http://localhost:9000

## Навигация

На главной странице есть навигационное меню с тремя разделами:
- **Главная** - домашняя страница приложения
- **People** - страница со списком людей
- **Animals** - страница со списком животных
- **Todolist** - страница со списком дел

## API

API микро-приложение предоставляет следующие методы:
- `window.apiService.getPeople()` - возвращает список людей
- `window.apiService.getPerson(id)` - возвращает информацию о человеке по ID
- `window.apiService.getAnimals()` - возвращает список животных
- `window.apiService.getAnimal(id)` - возвращает информацию о животном по ID
- `window.apiService.getTodos()` - возвращает список дел
- `window.apiService.getTodo(id)` - возвращает информацию о деле по ID

Все методы возвращают Promise с моковыми данными.

## Технологии

- React 18
- Single-SPA 6
- React Router DOM 6
- Webpack 5
- SystemJS (для загрузки модулей)
- Babel (для транспиляции)

## Структура файлов

```
single-spa-example/
├── root-config/          # Главное приложение
│   ├── src/
│   │   ├── index.js      # Регистрация приложений
│   │   ├── root.component.jsx
│   │   └── single-spa-root-config.js
│   ├── index.html
│   └── package.json
├── api/                  # API микро-приложение
│   ├── src/
│   │   └── single-spa-api.js
│   └── package.json
├── people/               # People микро-приложение
│   ├── src/
│   │   ├── people.component.jsx
│   │   └── single-spa-people.js
│   └── package.json
├── animals/              # Animals микро-приложение
│   ├── src/
│   │   ├── animals.component.jsx
│   │   └── single-spa-animals.js
│   └── package.json
├── styleguide/           # Styleguide микро-приложение
│   ├── src/
│   │   ├── styles.css
│   │   └── single-spa-styleguide.js
│   └── package.json
├── todolist/              # Todolist микро-приложение
│   ├── src/
│   │   ├── todolist.component.jsx
│   │   └── single-spa-todolist.js
│   └── package.json
└── package.json          # Корневой package.json
```

