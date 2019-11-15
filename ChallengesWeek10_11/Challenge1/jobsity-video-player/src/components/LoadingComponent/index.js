import React, { Component } from 'react';

import styled from 'styled-components';

import { rotate } from '../animations';

import { FullContainer } from '../../styles/commons';

import image from './loadingImage.jpeg';

const  StyledImage = styled.img`
    height: 20%;
    width: 20%;

    animation: ${rotate} 2s linear infinite;
`;

class LoadingComponent extends Component {
    state = { 
     }
    render() { 
        return ( 
            <FullContainer opened={this.props.opened} >
                <StyledImage src={image} alt="Loading"/>
            </FullContainer>
         );
    }
}
 
export default LoadingComponent;