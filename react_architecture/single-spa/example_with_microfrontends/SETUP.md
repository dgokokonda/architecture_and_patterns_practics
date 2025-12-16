# Инструкция по установке и запуску

## Быстрый старт

1. **Установите зависимости для всех приложений:**
   ```bash
   npm run install:all
   ```

2. **Запустите все приложения:**
   ```bash
   npm start
   ```

3. **Откройте браузер:**
   Перейдите по адресу: http://localhost:9000

## Альтернативный способ запуска

Если команда `npm start` не работает, запустите каждое приложение в отдельном терминале:

### Терминал 1 - Root Config
```bash
cd root-config
npm install
npm start
```

### Терминал 2 - API
```bash
cd api
npm install
npm start
```

### Терминал 3 - People
```bash
cd people
npm install
npm start
```

### Терминал 4 - Animals
```bash
cd animals
npm install
npm start
```

### Терминал 5 - Styleguide
```bash
cd styleguide
npm install
npm start
```

## Порты приложений

- **root-config**: http://localhost:9000
- **api**: http://localhost:9001
- **people**: http://localhost:9002
- **animals**: http://localhost:9003
- **styleguide**: http://localhost:9004

## Возможные проблемы

### Проблема: CORS ошибки
Убедитесь, что все приложения запущены и webpack-dev-server настроен с правильными заголовками CORS.

### Проблема: Модули не загружаются
Проверьте, что SystemJS правильно настроен в `root-config/index.html` и все URL в importmap корректны.

### Проблема: React Router не работает
Убедитесь, что в `root-config/webpack.config.js` включен `historyApiFallback: true`.

## Структура проекта

```
single-spa-example/
├── root-config/      # Главное приложение (порт 9000)
├── api/              # API сервис (порт 9001)
├── people/           # People микро-приложение (порт 9002)
├── animals/          # Animals микро-приложение (порт 9003)
├── styleguide/       # Стили (порт 9004)
├── package.json      # Корневой package.json
└── README.md         # Документация
```

