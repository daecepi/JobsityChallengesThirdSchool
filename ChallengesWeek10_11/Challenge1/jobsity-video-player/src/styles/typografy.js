import { css } from 'styled-components';

import defaultTheme from './index';

export const spaceReseter = css`
    margin: 0;
    padding: 0;
`;

export const baseH1 = css`
    ${spaceReseter}
    font-size: 30px;
    color: ${({theme}) => theme.colors.textOnBackground};
`;
baseH1.defaultProps = {
    theme: defaultTheme,
}

export const baseH2 = css`
    ${spaceReseter}
    font-size: 18px;
    color: ${({theme}) => theme.colors.textOnBackground};
`;
baseH2.defaultProps = {
    theme: defaultTheme,
}

export const baseH3 = css`
    ${spaceReseter}
    text-align: center;
    /*Add class for fonts later*/
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
`;

baseH3.defaultProps = {
    theme: defaultTheme,
}