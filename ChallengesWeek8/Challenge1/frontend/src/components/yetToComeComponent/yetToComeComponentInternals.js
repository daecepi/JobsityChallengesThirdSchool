//STYLING
import styled from 'styled-components';
import { secondaryWhite, secondaryBlue, thirdDark, primaryBlue } from '../../styles/colors';


export const YetContainer = styled.div`
    background: ${ secondaryWhite.rgb };
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
`;

export const StyledP = styled.p`
  color: ${thirdDark.rgb};
`;


export const StyledH1 = styled.h1`
  color: ${secondaryBlue.rgb};
  padding-bottom: 0.5rem;
`;

export const StyledA = styled.p`
  color: ${primaryBlue.rgb};
  text-decoration: none;
`;