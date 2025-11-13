// Single Responsibility Principle (Принцип единственной ответственности).
// Класс должен выполнять одну задачу, иметь одну область ответственности
// и только одну причину для изменений.

// выделять на отдельные сущности со своей ф-цией

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  // единая ответственность
  update(text) {
    this.text = text;
    this.modified = true;
  }

  // нарушает принцип единой ответственности
  // toHTML() {
  //   return `<div class="news">
  //   <h1>${this.title}</h1>
  //   <p>${this.text}</p>
  //   </div>`
  // }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `<div class="news">
    <h1>${this.news.title}</h1>
    <p>${this.news.text}</p>
    </div>`;
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified,
    });
  }
}

const news = new News("Госдума", "Ковид ограничения коснутся всех");

const printer = new NewsPrinter(news);
console.log(printer.html());
