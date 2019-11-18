import React, { Component } from 'react';

import styled from 'styled-components';

import defaultTheme from '../styles';

import LoadingComponent from './LoadingComponent';

import normalVideo from '../videos/BaseVideo.mp4';
import legacyVideo from '../videos/BaseVideo.webm';

export const PlayerContainer = styled.div`
    background: ${(props) => props.theme.colors.background};
    flex-grow: 5;
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

    getVideoComponent = () => {
        
        return (
            <video id={this.props.id} preload="metadata" width="100%" height="100%" controls>
                <source
                    src={normalVideo}
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                />
                <source
                    src={legacyVideo}
                    type='video/webm;codecs="vp8, vorbis"'
                />
            </video>
        );
    }

    render() { 
        const videoComponent = this.getVideoComponent();
        return ( 
            <PlayerContainer>
                { this.props.isLoading ? <LoadingComponent opened={false} /> : videoComponent }
            </PlayerContainer>
         );
    }
}


//Making sure the video player doesn't update unless props change
export default React.memo(Player);