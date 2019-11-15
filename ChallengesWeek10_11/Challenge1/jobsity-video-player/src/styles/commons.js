import styled from 'styled-components';

import defaultTheme from './index';

import {
    baseH1,
    baseH2,
    baseH3,
} from '../styles/typografy';

import { bodyMargins, bodyText, partialContainer } from './mixins';

export const FullContainer = styled.div`
    display: ${({opened}) => opened ? 'flex' : 'none' };
    justify-content: center;
    align-content: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
`;

export const StyledForm = styled.form`
    height: 80%;
    width: 50%;
    display:flex;
`;

export const InputContainer = styled.div`
    ${bodyMargins}    
`;

export const FormLabels = styled.label`
    ${bodyText}
    margin-bottom: 2px;
    color: ${({theme}) => theme.colors.secondaryTextOnBackground};
`;

FormLabels.defaultProps = {
    theme: defaultTheme,
};

export const TextInputs = styled.input.attrs(props =>({
    type: 'text'
}))`
    width: 100%;
`;

export const CommonText = styled.p`
    ${bodyText}
    color: ${({theme}) => theme.colors.textOnBackground};
`;

CommonText.defaultProps = {
    theme: defaultTheme,
}

export const SideBar= styled.div`
    margin: 0;
    margin-right: 3px;
    flex-grow: 1;
    background: ${({theme}) => theme.colors.secondaryBackground};
`;

SideBar.defaultProps = {
    theme: defaultTheme,
}

export const Card = styled.div`
    height: 300px;
    width: 90%;
    margin: auto;
    ${partialContainer}
    border-radius: 10%;
    background: ${({theme}) => theme.colors.secondarySoft};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

Card.defaultProps = {
    theme: defaultTheme,
}


export const StyleList = styled.ul`
    color: ${({theme}) => theme.colors.textOnSecondaryBackground};

    
    list-style-type: none;
`;

StyleList.defaultProps = {
    theme: defaultTheme,
}

export const BaseControlBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

/*
BASE TYPOGRAPHY COMPONENTS
*/
export const MainTitle = styled.h1`
    ${baseH1}
`;

MainTitle.defaultProps = {
    theme: defaultTheme,
}

export const SecondaryTitle = styled.h2`
    ${baseH2}
`;


SecondaryTitle.defaultProps = {
    theme: defaultTheme,
}

export const BaseTitle = styled.h3`
    ${baseH3}
`;

BaseTitle.defaultProps = {
    theme: defaultTheme,
}

export const BaseText = styled.p`

`;

BaseText.defaultProps = {
    theme: defaultTheme,
};