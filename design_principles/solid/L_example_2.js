// Принцип подстановки Барбары Лисков (The Liskov Substitution Principle)
// Наследники должны повторять поведение родительского класса и должны вести себя без сюрпризов.
// т.е. условно выбирать правильные слои абстракции

class Component {
  isComponent = true;
  // getTemplate() {
  //   return `<div>Component</div>`;
  // }
}

class Header extends ComponentWithTemplate {
  onInit() {}
}

class Footer extends ComponentWithTemplate {
  afterInit() {}
}

// добавили доп. слои абстракции
class ComponentWithTemplate {
  render() {
    return `<div>Component</div>`;
  }
}

// добавили доп. слои абстракции
class ComponentWithoutTemplate {}

// class HOC extends Component {
//   // не должен содержать render
//   render() {
//     throw new Error("Render impossible");
//   }
// }

// наследование от доп. слоя абстракции
class HOC extends ComponentWithoutTemplate {
  render() {
    throw new Error("Render impossible");
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new Header());
renderComponent(new Footer());
// renderComponent(new HOC())
