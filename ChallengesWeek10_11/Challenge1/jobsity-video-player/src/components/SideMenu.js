import React, { Component } from 'react';


import { 
    SideBar,
    Card,
    StyleList,
    StyledSnippets,
    BaseShortTitle,
 } from '../styles/commons';

 import styled from 'styled-components';

 const Title = styled(BaseShortTitle)`
    justify-self: center;
 `;


class SideMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <SideBar>
                <Card>
                    <Title>Assets</Title>
                    <StyleList>
                        {this.props.assets.map( (asset) => {
                            return (
                                <li key={asset.id}>
                                    {asset.name}
                                </li>
                            );
                        })}
                    </StyleList>
                </Card>
                <Card>
                    <Title>Clips</Title>
                    <StyledSnippets>
                        {this.props.snippets.map( (snippet) => {
                            return (
                                <li key={snippet.id}>
                                    {snippet.name}
                                </li>
                            );
                        })}
                    </StyledSnippets>
                </Card>
        </SideBar>
         );
    }
}
 
export default SideMenu;
