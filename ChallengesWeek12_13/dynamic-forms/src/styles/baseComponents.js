import styled from 'styled-components';

import defaultTheme from './index';

import {
    HorizontalCentral,
    CenteredSpacedContainer,
} from './mixings'

export const FullWrapper = styled.div`
    ${HorizontalCentral}
    height: 100vh;
    width: 100vw;

    background: green;
`;

export const BaseFormWrapper = styled.div`
    ${CenteredSpacedContainer}

    height: 300px;
    width: 450px;
    background: red;
    display: flex;
    flex-direction: column;
    @media(max-width: 580px){
        height: 20%;
        width: 90%;
    }
`;

BaseFormWrapper.defaultProps= {
    theme: defaultTheme,
}
