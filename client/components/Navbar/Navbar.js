import React, { Component } from "react";
// import { Nav } from "react-bootstrap";
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
      <Nav>
        <NavLink to="/">
          <img source="../././images/logo-test.png"></img>
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
    );
  }
}

export default Navbar;
