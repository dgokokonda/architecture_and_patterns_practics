import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import singleSpaReact from "single-spa-react";
import App from "./App";
import store from "./store";

const history = createBrowserHistory();
const store = configureStore(history);
const reactLifeCycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: (props) => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App {...props} />
      </ConnectedRouter>
      {/* <BrowserRouter basename={props.basename || "/"}>
        <App />
      </BrowserRouter> */}
    </Provider>
  ),
});

export const { bootstrap, mount, unmount } = reactLifeCycles;
