import React, { Component } from "react";

import { Link } from "react-router-dom";

import { FullContainer } from "../../styles";

import { YetContainer, StyledP, StyledH1, StyledA } from "./yetToComeComponentInternals";

class YetToComeComponent extends Component {
  render() {
    return (
      <FullContainer>
        <YetContainer>
          <StyledH1>Page still in proccess</StyledH1>
          <StyledP>This page is still being made (sorry for the inconvenience).</StyledP>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledA>Go home</StyledA>
          </Link>
        </YetContainer>
      </FullContainer>
    );
  }
}

export default YetToComeComponent;
