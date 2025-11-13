// позволяет ставить ловушки на поля объектов/ вызовы функции и гибко определяет работу приложения в дальнейшем (избавляет от лишних запросов к серверу)

// объект для которого нужно сделать прокси (target)
function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  // 2й аргумент - конфиг-я прокси, объект с ловушками (методами перехвата разных операций)
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args); // Reflect - встроенный объект, упрощающий создание прокси
    }
  },
});

console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("angular.io"));
