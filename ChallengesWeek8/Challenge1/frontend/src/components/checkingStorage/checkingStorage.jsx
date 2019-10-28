import React, { Component } from "react";

class checkingStorageComponent extends Component {
  state = {};
  render() {
    return (
      <div className="full-container">
        <div className="checking-container">
          <h1>Processing previous preferences</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}

export default checkingStorageComponent;
