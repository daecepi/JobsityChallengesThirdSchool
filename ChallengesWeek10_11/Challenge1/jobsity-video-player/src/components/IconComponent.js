import React, { Component } from 'react';

import styled from 'styled-components';
import defaultTheme from '../styles';

export const IconContainer = styled.div`
    height: 100%;
    margin-right: 5px;
    margin-left: 5px;
`;

export const Icon = styled.i`
    color: ${({theme, color}) => color || theme.colors.textOnBackground};
    size: ${({size}) => size ? `${size}px`: "25px" };
`;

Icon.defaultProps={
    theme: defaultTheme,
};



class IconComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <IconContainer>
                <Icon className={`fas fa-${this.props.className}`} color={this.props.color} size={this.props.size} />
            </IconContainer>
         );
    }
}
 
export default IconComponent ;