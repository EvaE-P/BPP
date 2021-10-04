import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          className="princessHomepage"
          width="100%"
          height="100%"
          src="/images/fantasy-princess.jpeg"
        />
      </div>
    );
  }
}

export default Homepage;
