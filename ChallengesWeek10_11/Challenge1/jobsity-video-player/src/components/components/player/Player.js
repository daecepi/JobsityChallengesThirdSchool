import React, { Component } from 'react';

import styled from 'styled-components';

import defaultTheme from '../theme';

import LoadingComponent from '../LoadingComponent';

export const PlayerContainer = styled.div`
    height: 100%;
    width: 30%;
    background: ${({theme}) => theme.colors.background};
`;

PlayerContainer.defaultProps = {
    theme: defaultTheme,
}

export const StyledSlider = styled.input`
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.textOnBackground};

    &::-webkit-slider-thumb{
        color: ${({theme}) => theme.colors.primary};
    }
`;

StyledSlider.defaultProps = {
    theme: defaultTheme,
}

class Player extends Component {
    state = { 
        source: false,
        time: 0,
     }
    render() { 
        return ( 
            <PlayerContainer>
                <LoadingComponent opened/>
                <StyledSlider type="range" min="">

                </StyledSlider>
            </PlayerContainer>
         );
    }
}
 
export default Player;