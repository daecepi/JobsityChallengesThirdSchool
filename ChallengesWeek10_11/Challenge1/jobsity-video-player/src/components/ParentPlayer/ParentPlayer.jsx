import React, { Component } from 'react';

import { ParentPlayerWrapper } from './ParentPlayerInternals';

/**
 * Parent player is the wrapper component of the player component made:
 * Expects:
 *  - FOR SIZE: heigth, width and flex-basis (if flex-basis passed is recommended to omit the height or width depending on the flex-direction; for example if column then omit width)
 *  - Behaviour
 *      - mode: "edit" to display the video editor and "prod" to just enter player that reproduces the snippets
 *      - assets: a list with the assets that the video is generated of
 */
class ParentPlayer extends Component {
    state = {  }
    render() { 
        const { identifier , ...layoutProperty } = this.props;
        return ( 
            <ParentPlayerWrapper {...layoutProperty} >
                
            </ParentPlayerWrapper>
         );
    }
}
 
export default ParentPlayer;