// Принцип "Открыто–закрыто" (The Open Closed Principle)
// Классы должны быть открыты для расширения и закрыты для модификации.

// расширяем имплементацию, но не изменяем реализацию

class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.type = "square";
    this.size = size;
  }

  area() {
    this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "circle";
    this.radius = radius;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.type = "rect";
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    // не изменяем реализацию
    return this.shapes.reduce((acc, el) => {
      // вынесли логику расчета площади фигур в метод area каждому классу,
      // т.к. классу AreaCalculator нерелевантно самому рассчитывать для каждого типа фигур = принцип О/З
      acc += el.area();
      return acc;
    }, 0);
  }
}

// расширяем
const calc = new AreaCalculator([new Square(3), new Circle(4), new Circle(5)]);
console.log(calc.sum());
