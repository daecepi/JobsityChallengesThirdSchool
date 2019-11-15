import React, { Component } from 'react';

import styled from 'styled-components';

import defaultTheme from '../../styles';

import LoadingComponent from '../LoadingComponent';

import VideoComponent from '../Video';

export const PlayerContainer = styled.div`
    background: ${(props) => props.theme.colors.background};

    display: flex;
    flex-direction:column;
`;

PlayerContainer.defaultProps = {
    theme: defaultTheme,
};

//Make the map
class Player extends Component {
    state = { 
        source: false,
        time: 0,
     }
    render() { 
        return ( 
            <PlayerContainer>
                
                { !this.props.loading ? <LoadingComponent opened={false}/> : <VideoComponent /> }

            </PlayerContainer>
         );
    }
}
 

/**
 * 
 * 
                {
                this.props.assets.map( asset => {
                    return (
                        <VideoComponent { ...asset }  />
                    );
                })
                }
 */
//Making sure the video player doesn't update unless props change
export default React.memo(Player);