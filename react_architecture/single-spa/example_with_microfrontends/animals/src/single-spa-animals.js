import React from "react";
import ReactDOM from "react-dom/client";
import Animals from "./animals.component";

let root = null;

const getAnimalsContainer = (props) => {
  let domElement = document.getElementById('animals-app');

  if (!domElement) {
    domElement = document.getElementById('div');
    domElement.id = 'animals-app';

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
}

// Экспортируем функции жизненного цикла
export const bootstrap = async (props) => {
  console.log('Animals app bootstrap', props);
  return Promise.resolve();
};

export const mount = async (props) => {
  console.log('Animals app mount', props);

  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const domElement = getAnimalsContainer(props);

        root = ReactDOM.createRoot(domElement);
        root.render(
          <React.StrictMode>
            <Animals {...props} />
          </React.StrictMode>
        );

        console.log('Animals app mounted successfully');
        resolve();
      } catch (error) {
        console.error('Failed to mount Animals app:', error);
        resolve(); // Все равно резолвим, чтобы не ломать single-spa
      }
    }, 0);
  });
};

export const unmount = async (props) => {
  console.log('Animals app unmount', props);

  return new Promise((resolve) => {
    if (root) {
      root.unmount();
      root = null;
    }

    // Очищаем контейнер (опционально)
    const domElement = document.getElementById('animals-app');
    if (domElement && domElement.parentNode) {
      domElement.innerHTML = '';
    }

    resolve();
  });
};

// Для отладки
if (process.env.NODE_ENV === 'development') {
  console.log('Animals microfrontend loaded');
}