import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Animals from "./animals.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Animals,
  domElementGetter: () => document.getElementById("animals-app"),
  errorBoundary(err, info, props) {
    return (
      <div className="error-boundary">
        <h2>Ошибка в Animals приложении</h2>
        <p>{err.message}</p>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
