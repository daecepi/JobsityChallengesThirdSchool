import React, { Component } from 'react';

import styled from 'styled-components';

import { 
    BaseFormWrapper
 } from '../../styles/baseComponents';

const Title = styled.h1`
    background: purple;
    margin: 0;
    padding: 0;
`;

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <BaseFormWrapper>
                <Title>
                    {this.props.title}
                </Title>
                {this.props.children}
            </BaseFormWrapper>
         );
    }   
}
 
export default Card;