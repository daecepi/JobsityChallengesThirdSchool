import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SideMenu from './SideMenu';


import Player  from './Player';
import styled from 'styled-components';


import defaultTheme from '../styles/index';
/**
 * General container that fixes layout according to parameters given
 */
export const ParentPlayerWrapper = styled.div`
    ${props => props.height ? "height: "+props.height+"%;" : !props.flex_basis ? "height: 100%;" : ""}
    ${props => props.width ? "width: "+props.width+"%;" : !props.flex_basis ? "width: 100%;" : ""}
    ${props => props.flex_basis ? "flex_basis: "+props.flex_basis+"%;" : ""}
    
    /*Styling*/
    display: flex;
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
        isPlayingSnippets: false,
        isPlayingAssets: false,
        isLoading: false,
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
     * Function to add snippets
     */
    addSnippet = (id, name, startTime, endTime) => {
        this.setState({
            snippets: [ ...this.state.snippets, {
                id,
                name,
                startTime,
                endTime,
            }],
        });
    }

    deleteSnippet = (id) => {
        const filtered = this.state.snippets.filter(snippet => snippet.id !== id);
        this.setState({
            snippets: filtered,
        });
    }
    
    loadAssets = () => {
        let loadedAssets = localStorage.getItem("assets"+this.props.identifier);
        if(loadedAssets){
            return JSON.parse(loadedAssets);
        }
        const assets = this.props.assets;
        localStorage.setItem("assets"+this.props.identifier, JSON.stringify(assets));
        return assets;
    }
    
    loadSnippets = () => {
        let loadedSnippets = localStorage.getItem("snippets"+this.props.identifier);

        if(loadedSnippets){
            return JSON.parse(loadedSnippets);
        }
        const snippets = [];
        localStorage.setItem("snippets"+this.props.identifier, JSON.stringify(snippets));
        
        return snippets;
    }

    saveAssets = () => {
        localStorage.setItem("assets"+this.props.identifier, JSON.stringify(this.props.assets));
    }

    saveSnippets = () => {
        localStorage.setItem("snippets"+this.props.identifier, JSON.stringify(this.state.snippets));
    }

    componentWillUnmount(){
        this.saveSnippets();
        this.saveAssets();
    }
    
    render() { 
        const { identifier , ...layoutProperty } = this.props;
        return ( 
            <ParentPlayerWrapper {...layoutProperty} >
                {this.props.mode === "edit"? <SideMenu assets={this.state.assets} snippets={this.state.snippets} /> : ""}
                <Player assets={this.state.assets} isLoading={this.state.isLoading} snippets={this.state.snippets} />
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