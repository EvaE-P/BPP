import React, { Component } from "react";
// import { Nav } from "react-bootstrap";
import { Router } from "react-router-dom";
// import history from "../../history";
import history from "../../history";

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Bars
} from "./NavbarElements";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Nav>
          <NavLink to="/">
            <img
              className="contact-img"
              width="70"
              height="70"
              src="/images/logo-test.png"
            ></img>
          </NavLink>
          <h1 className="h1-general">BPP</h1>
          <Bars />
          <NavMenu>
            <NavLink to="/apply">Submit</NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </Nav>
      </Router>
    );
  }
}

export default Navbar;
