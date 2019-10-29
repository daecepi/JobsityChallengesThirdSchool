import React, { Component } from "react";

//Link to move between pages
import { Link } from "react-router-dom";

//STYLING
import styled from 'styled-components';
import { FullContainer, defaultStyleLink } from '../../styles/index';
import { secondaryWhite, secondaryBlue, thirdDark } from "../../styles/colors";

const NotFoundContainer = styled.div`
  background: ${secondaryWhite.rgb};
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

const StyledH1  = styled.h1`
  color: ${ secondaryBlue.rgb };
  padding-bottom: 0.5rem;
`;

const StyledP = styled.p`
  color: ${thirdDark.rgb};
`;


class NotFoundPageComponent extends Component {
  render() {
    return (
      <FullContainer>
        <NotFoundContainer>
          <StyledH1>404 Page not found</StyledH1>
          <StyledP>Resource not found</StyledP>
          <Link style={defaultStyleLink} to="/">Go home</Link>
        </NotFoundContainer>
      </FullContainer>
    );
  }
}

export default NotFoundPageComponent;
