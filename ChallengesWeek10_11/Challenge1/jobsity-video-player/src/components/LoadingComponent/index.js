import React, { Component } from 'react';

import styled from 'styled-components';

import { rotate } from '../animations';

import { FullContainer } from '../../styles/commons';

const  StyledImage = styled.img`
    height: 20%;
    width: 20%;

    animation: ${rotate} 2s linear infinite;
`;

class LoadingComponent extends Component {
    state = { 
        resource: "./LoadingImage.jpeg",
     }
    render() { 
        return ( 
            <FullContainer opened={this.props.opened} >
                <StyledImage src={this.state.resource} alt="Loading"/>
            </FullContainer>
         );
    }
}
 
export default LoadingComponent;