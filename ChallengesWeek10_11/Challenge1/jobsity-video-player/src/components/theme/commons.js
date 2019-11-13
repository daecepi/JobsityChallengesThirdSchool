import styled from 'styled-components';

import defaultTheme from './index';

import { bodyMargins, bodyText } from './mixins';

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