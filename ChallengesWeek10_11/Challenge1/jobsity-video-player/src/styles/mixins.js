import { css } from 'styled-components';

const noSpacing = css`
    margin: 0;
    padding: 0;
`;

export const bodyMargins = css`
    margin-left: 5px;
    margin-right: 5px;
`;
export const elementMargins = css`
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const bodyText = css`
    ${noSpacing}
    font-size: 0.9rem;
    font-weight: normal;
`;

export const partialContainer = css`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const defaultHorizontalSpacer = css`
    margin-left: 20px;
    margin-right: 20px;
`;
