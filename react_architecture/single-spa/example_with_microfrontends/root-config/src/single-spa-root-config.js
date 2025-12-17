import { registerApplication, start } from "single-spa";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root.component";

// Register microfrontends
registerApplication({
  name: "@single-spa-example/api",
  app: () => System.import("@single-spa-example/api"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@single-spa-example/styleguide",
  app: () => System.import("@single-spa-example/styleguide"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@single-spa-example/people",
  app: () => System.import("@single-spa-example/people"),
  activeWhen: (location) => location.pathname === "/people",
});

registerApplication({
  name: "@single-spa-example/animals",
  app: () => System.import("@single-spa-example/animals"),
  activeWhen: (location) => location.pathname === "/animals",
});

registerApplication({
  name: "@single-spa-example/todolist",
  app: () => System.import("@single-spa-example/todolist"),
  activeWhen: (location) => location.pathname === "/todolist",
});

start({
  urlRerouteOnly: true,
});

// Mount root component directly
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Root />);
}
