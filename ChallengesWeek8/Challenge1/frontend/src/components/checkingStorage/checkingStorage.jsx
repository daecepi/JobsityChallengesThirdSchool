import React, { Component } from "react";


//STYLING
import styled from 'styled-components';
import { FullContainer } from "../../styles";
import { secondaryBlue, thirdDark, secondaryWhite } from "../../styles/colors";

const CheckingContainer = styled.div`
  background: ${secondaryWhite.rgb};
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

const StyledH1 = styled.h1`
  color: ${secondaryBlue.rgb};
  padding-bottom: 0.5rem;
`;

const StyledP = styled.p`
  color: ${thirdDark.rgb};
`;


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
