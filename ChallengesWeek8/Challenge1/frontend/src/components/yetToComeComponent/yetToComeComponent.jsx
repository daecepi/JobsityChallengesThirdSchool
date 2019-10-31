import React, { Component } from "react";

import { Link } from "react-router-dom";


//STYLING
import styled from 'styled-components';
import { FullContainer } from '../../styles';
import { secondaryWhite, secondaryBlue, thirdDark, primaryBlue } from '../../styles/colors';



const YetContainer = styled.div`
    background: ${ secondaryWhite.rgb };
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
`;

const StyledP = styled.p`
  color: ${thirdDark.rgb};
`;


const StyledH1 = styled.h1`
  color: ${secondaryBlue.rgb};
  padding-bottom: 0.5rem;
`;

const StyledA = styled.p`
  color: ${primaryBlue.rgb};
  text-decoration: none;
`;

class YetToComeComponent extends Component {
  
  render() {
    return (
      <FullContainer>
        <YetContainer>
          <StyledH1>Page still in proccess</StyledH1>
          <StyledP>This page is still being made (sorry for the inconvenience).</StyledP>
          <Link style={{ textDecoration: 'none' }} to="/"><StyledA>Go home</StyledA></Link>
        </YetContainer>
      </FullContainer>
    );
  }
}

export default YetToComeComponent;
