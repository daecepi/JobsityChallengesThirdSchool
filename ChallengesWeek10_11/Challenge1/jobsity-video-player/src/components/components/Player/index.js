import React, { Component } from './node_modules/react';

import styled from './node_modules/styled-components';

import defaultTheme from '../theme';

import LoadingComponent from '../LoadingComponent';

export const PlayerContainer = styled.div`
    height: 100%;
    width: 30%;
    background: ${({theme}) => theme.colors.background};

    display: flex;
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
                <StyledSlider type="range">

                </StyledSlider>
            </PlayerContainer>
         );
    }
}
 
//Making sure the video player doesn't update unless props change
export default React.memo(Player);