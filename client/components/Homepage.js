import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          className="contact-img"
          width="70"
          height="70"
          src="/images/bpp-img.png"
        />
      </div>
    );
  }
}

export default Homepage;
