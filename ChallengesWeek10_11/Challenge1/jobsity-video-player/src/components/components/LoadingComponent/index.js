import React, { Component } from 'react';

import styled from 'styled-components';

import { rotate } from '../../animations';

const FullContainer = styled.div`
    display: ${({opened}) => opened ? 'flex' : 'hidden' };
    justify-content: center;
    align-content: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
`;

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