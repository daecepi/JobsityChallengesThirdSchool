import { css } from 'styled-components';

export const BoxSeparation = css`
    margin-top: 20px;
`;

export const HorizontalCentral = css`
    display: flex;
    justify-content: center;
`;

export const CenteredSpacedContainer = css`
    ${HorizontalCentral}
    ${BoxSeparation}
`;