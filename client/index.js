import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import Main from "./components/Main";

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,

  document.getElementById("app")
);
