import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import singleSpaReact from "single-spa-react";
import App from "./App";
import store from "./store";

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: (props) => (
    <Provider store={store}>
      <BrowserRouter basename={props.basename || "/"}>
        <App />
      </BrowserRouter>
    </Provider>
  ),
});

export const { bootstrap, mount, unmount } = reactLifeCycles;
