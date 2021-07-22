import React, { Component } from "react";
// import { connect } from "react-redux";
// import { HashRouter, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage";
import Contact from "./Contact";
// import { NavItem } from "react-bootstrap";
// import { Router, Route, browserHistory, IndexRoute } from "react-router";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

// const Connected = connect(
//   null,
//   null
// )(Main);
export default Main;
