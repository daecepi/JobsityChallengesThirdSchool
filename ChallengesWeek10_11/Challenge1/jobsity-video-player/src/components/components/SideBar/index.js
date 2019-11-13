import styled from 'styled-components';

import defaultTheme from '../../Theme';

export const SideBar= styled.div`
    margin: 10px 3px 10px;
    background: red;
`;
SideBar.defaultProps = {
    theme: defaultTheme
}

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
