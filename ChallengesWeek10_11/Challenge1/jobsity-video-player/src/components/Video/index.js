import React, { Component } from 'react';

import styled from 'styled-components';

const VideoMedia = styled.video`
`;

class VideoComponent extends Component {
    state = { 
     }
    render() { 
        return ( 
            <VideoMedia id={this.props.id} preload="metadata" width="100%" height="100%" controls>
                <source
                    src={this.props.urlNormal}
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                />
                <source
                    src={this.props.urlLegacy}
                    type='video/webm;codecs="vp8, vorbis"'
                />
            </VideoMedia>
         );
    }
}
 
export default VideoComponent;