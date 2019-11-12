import styled from 'styled-components';

import defaultTheme from './theme';

export const SideBar= styled.div`
    margin: 0px 3px;
`;

export const PartialContainer = styled.div`
    margin: 3px 0px;
`;

export const StyledSection = styled.ul`
    background: ${({theme}) => theme.colors.secondaryBackground};
    color: ${({theme}) => theme.colors.textOnSecondaryBackground};
`;

StyledSection.defaultProps = {
    theme: defaultTheme,
}

export const StyledSnippets = styled(StyledSection)`

`;
