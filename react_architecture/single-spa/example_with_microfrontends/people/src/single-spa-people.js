import React from 'react';
import ReactDOM from 'react-dom/client';
import People from './people.component';

let root = null;

// Функция для получения DOM элемента
const getPeopleContainer = (props) => {
  let domElement = document.getElementById('people-app');

  if (!domElement) {
    domElement = document.createElement('div');
    domElement.id = 'people-app';

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
  console.log('People app bootstrap', props);
  return Promise.resolve();
};

export const mount = async (props) => {
  console.log('People app mount', props);

  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const domElement = getPeopleContainer(props);

        root = ReactDOM.createRoot(domElement);
        root.render(
          <React.StrictMode>
            <People {...props} />
          </React.StrictMode>
        );

        console.log('People app mounted successfully');
        resolve();
      } catch (error) {
        console.error('Failed to mount People app:', error);
        resolve(); // Все равно резолвим, чтобы не ломать single-spa
      }
    }, 0);
  });
};

export const unmount = async (props) => {
  console.log('People app unmount', props);

  return new Promise((resolve) => {
    if (root) {
      root.unmount();
      root = null;
    }

    // Очищаем контейнер (опционально)
    const domElement = document.getElementById('people-app');
    if (domElement && domElement.parentNode) {
      domElement.innerHTML = '';
    }

    resolve();
  });
};

// Для отладки
if (process.env.NODE_ENV === 'development') {
  console.log('People microfrontend loaded');
}