import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Router } from "react-router-dom";
// import history from "./history";
import Main from "./components/Main";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,

  document.getElementById("app")
);
