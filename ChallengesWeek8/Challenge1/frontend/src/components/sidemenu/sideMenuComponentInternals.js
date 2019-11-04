//STYLING
import styled from 'styled-components';
import { primaryBlue, primaryDark, primaryWhite } from '../../styles/colors';


export const MenuLeft = styled.div`
  font-family: "PlutonGeneral", Fallback, sans-serif;
  background: ${primaryDark.rgb};
  padding-left: 1rem; /* adding margin to side containers*/
  padding-right: 1rem; /* adding margin to side containers*/
  padding-top: 1.5rem;
`;

export const UlStyled = styled.ul`
  color: ${primaryBlue.rgb};
  list-style-type: none;
  padding: 0%;
  font-size:0.8rem;
`;

export const StyledP = styled.p`
  font-weight: bold;
  color: ${primaryWhite.rgb };
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
`;

export const StyledLi = styled.li`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
`;

export const StyledI = styled.i`
  icon
  color: ${props => props.color}
`;

export const StyledButton = styled.button`
  margin-left: 0.5rem;
  background: none;
  border:none;
  color: ${props => props.color};

  &:hover{
    color: white;
  }
  `;
