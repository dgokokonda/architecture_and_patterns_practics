import React from 'react';
import ReactDOM from 'react-dom/client';
import Todolist from './todolist.component';

let root = null;

// Функция для получения DOM элемента
const getTodolistContainer = (props) => {
  let domElement = document.getElementById('todolist-app');

  if (!domElement) {
    domElement = document.createElement('div');
    domElement.id = 'todolist-app';

    // Ищем контейнер для монтирования
    const container = props.appName ?
      document.getElementById(`${props.appName}-container`) :
      document.getElementById('microfrontend-container');

    if (container) {
      container.appendChild(domElement);
    } else {
      document.body.appendChild(domElement);
    }
  }

  return domElement;
};

// Экспортируем функции жизненного цикла
export const bootstrap = async (props) => {
  console.log('Todolist app bootstrap', props);
  return Promise.resolve();
};

export const mount = async (props) => {
  console.log('Todolist app mount', props);

  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const domElement = getTodolistContainer(props);

        root = ReactDOM.createRoot(domElement);
        root.render(
          <React.StrictMode>
            <Todolist {...props} />
          </React.StrictMode>
        );

        console.log('Todolist app mounted successfully');
        resolve();
      } catch (error) {
        console.error('Failed to mount Todolist app:', error);
        resolve(); // Все равно резолвим, чтобы не ломать single-spa
      }
    }, 0);
  });
};

export const unmount = async (props) => {
  console.log('Todolist app unmount', props);

  return new Promise((resolve) => {
    if (root) {
      root.unmount();
      root = null;
    }

    // Очищаем контейнер (опционально)
    const domElement = document.getElementById('todolist-app');
    if (domElement && domElement.parentNode) {
      domElement.innerHTML = '';
    }

    resolve();
  });
};

// Для отладки
if (process.env.NODE_ENV === 'development') {
  console.log('Todolist microfrontend loaded');
}