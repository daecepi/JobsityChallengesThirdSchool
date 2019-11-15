import React, { Component } from 'react';


import { 
    SideBar,
    Card,
    StyleList,
    BaseControlBox,
 } from '../styles/commons';

import {
    MainTitle,
} from '../styles/commons';

import {
    baseH3,
} from '../styles/typografy';

 import styled from 'styled-components';
import IconComponent from './IconComponent';

 const Title = styled(baseH3)`
    justify-self: center;
 `;


class SideMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <SideBar>
                <MainTitle>Resources</MainTitle>
                <Card>
                    <BaseControlBox>
                        <Title>Assets</Title>
                        <IconComponent 
                            className={}
                        />
                    </BaseControlBox>
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
                    <StyleList>
                        {this.props.snippets.map( (snippet) => {
                            return (
                                <li key={snippet.id}>
                                    {snippet.name}
                                </li>
                            );
                        })}
                    </StyleList>
                </Card>
        </SideBar>
         );
    }
}
 
export default SideMenu;
