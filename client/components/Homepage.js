import React, { Component } from "react";
import image from "../images/bpp-img.jpeg";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={require("../images/bpp-img.jpeg")} />
      </div>
    );
  }
}

export default Homepage;
