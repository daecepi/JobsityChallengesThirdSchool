import React, { Component } from "react";

//Link to move between pages
import { Link } from "react-router-dom";

import { FullContainer, defaultStyleLink } from '../../styles';
import { 
  NotFoundContainer,
  StyledH1,
  StyledP
 } from './notFoundPageInternals';

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
