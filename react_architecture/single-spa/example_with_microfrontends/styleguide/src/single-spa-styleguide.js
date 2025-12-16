// Styleguide microfrontend - exports styles
import "./styles.css";

export async function bootstrap(props) {
  console.log("Styleguide bootstrapped");
}

export async function mount(props) {
  console.log("Styleguide mounted");
}

export async function unmount(props) {
  console.log("Styleguide unmounted");
}
