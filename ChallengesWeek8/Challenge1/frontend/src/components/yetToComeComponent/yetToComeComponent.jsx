import React, { Component } from "react";

import { Link } from "react-router-dom";

class YetToComeComponent extends Component {
  state = {};
  render() {
    return (
      <div className="full-container">
        <div className="yet-container">
          <h1>Page still in proccess</h1>
          <p>This page is still being made (sorry for the inconvenience).</p>
          <Link to="/">Go home</Link>
        </div>
      </div>
    );
  }
}

export default YetToComeComponent;
