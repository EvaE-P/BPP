import React, { Component } from "react";
import image from "../../public/bpp-img.jpeg";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <img src={process.env.PUBLIC_URL + "/bpp-img.jpeg"} alt="test" /> */}
        <img src={image} alt="test" />
      </div>
    );
  }
}

export default Homepage;
