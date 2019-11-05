import React, { Component } from "react";

import { FullContainer } from "../../styles";
import { CheckingContainer, StyledH1, StyledP } from "./chekingStorageInternals";

class checkingStorageComponent extends Component {
  render() {
    return (
      <FullContainer>
        <CheckingContainer>
          <StyledH1>Processing previous preferences</StyledH1>
          <StyledP>Loading...</StyledP>
        </CheckingContainer>
      </FullContainer>
    );
  }
}

export default checkingStorageComponent;
