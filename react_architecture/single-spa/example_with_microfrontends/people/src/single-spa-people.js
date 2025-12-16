import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import People from "./people.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: People,
  domElementGetter: () => document.getElementById("people-app"),
  errorBoundary(err, info, props) {
    return (
      <div className="error-boundary">
        <h2>Ошибка в People приложении</h2>
        <p>{err.message}</p>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
