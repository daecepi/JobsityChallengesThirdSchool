import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    SideBar,
    PartialContainer,
    StyledSection,
    StyledSnippets,
} from './SideBar';

import Player  from './Player';
import styled from 'styled-components';

import defaultTheme from '../theme/index';
/**
 * General container that fixes layout according to parameters given
 */
export const ParentPlayerWrapper = styled.div`
    ${props => props.height ? "height: "+props.height+"%;" : !props.flex_basis ? "height: 100%;" : ""}
    ${props => props.width ? "width: "+props.width+"%;" : !props.flex_basis ? "width: 100%;" : ""}
    ${props => props.flex_basis ? "flex_basis: "+props.flex_basis+"%;" : ""}
    
    /*Styling*/
    display: grid;
    grid-template-columns: 1fr 15fr;
    background: green;
`;

ParentPlayerWrapper.defaultProps = {
    theme: defaultTheme,
};

/**
 * Parent player is the wrapper component of the player component made:
 * Expects:
 *  - FOR SIZE: heigth, width and flex-basis (if flex-basis passed is recommended to omit the height or width depending on the flex-direction; for example if column then omit width)
 *  - Behaviour
 *      - mode: "edit" to display the video editor and "prod" to just enter player that reproduces the snippets
 *      - assets: a list with the assets that the video is generated of
 */
class ParentPlayer extends Component {
    
    state = {
        assets: [],
        snippets: [],
        isPlaying: undefined,
    };

    componentDidMount(){
        this.loadState();
    }

    loadState = () => {
        const snippets = this.loadSnippets();
        const assets = this.loadAssets();

        this.setState({
            snippets,
            assets
        });
    }

    /**
     * {
     * id: string
     * name: string
     * t: string // t=start,end
     * }
     */

    /**
     * Function to add snippets
     */
    addSnippet = () => {

    }
    
    loadSnippets = () => {
        let snippets = localStorage.getItem("snippets"+this.props.identifier);

        if(!snippets){
            snippets = [];
            localStorage.setItem("snippets"+this.props.identifier, snippets);
        }
        return snippets;
    }

    loadAssets = () => {
        let loadedAssets = localStorage.getItem("assets"+this.props.identifier);
        let assets = [];
        if(!loadedAssets){
            assets = this.props.assets;
            localStorage.setItem("assets"+this.props.identifier, assets);
        }

        return assets;
    }

    componentWillUnmount(){
        localStorage.setItem("snippets"+this.props.identifier, this.state.snippets);
        localStorage.setItem("assets"+this.props.identifier, this.state.assets);
    }


    returnSideBar = () => {
        if(this.props.mode !== "edit") 
            return (
                <SideBar>
                    <PartialContainer>
                        <StyledSection>
                            {this.state.assets.map( (asset) => {
                                return (
                                    <li key={asset.id}>
                                        {asset.desc}
                                    </li>
                                );
                            })}
                        </StyledSection>
                    </PartialContainer>
                    <PartialContainer>
                        <StyledSnippets>
                            {this.state.snippets.map( (snippet) => {
                                return (
                                    <li key={snippet.id}>
                                        {snippet.desc}
                                    </li>
                                );
                            })}
                        </StyledSnippets>
                    </PartialContainer>
                </SideBar>
            );
    }
    
    render() { 
        const { identifier , ...layoutProperty } = this.props;
        return ( 
            <ParentPlayerWrapper {...layoutProperty} >
                {this.returnSideBar()}
                <Player assets={this.state.assets} snippets={this.state.snippets} />
            </ParentPlayerWrapper>
         );
    }
}

ParentPlayer.propTypes = {
    identifier: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    mode: PropTypes.string,
    assets: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        normal: PropTypes.string,
        legacy: PropTypes.string,
    }))
};

export default ParentPlayer;