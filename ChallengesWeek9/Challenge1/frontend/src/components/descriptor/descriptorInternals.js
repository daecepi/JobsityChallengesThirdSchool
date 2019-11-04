
//STYLING
import styled from 'styled-components';


export const GeneralHoverContainer = styled.div`
  margin: 0.4rem;
  height: 100%;
  width: 100%;
`;

export const HoverDesc = styled.div`
  width: 100%;
  display: flex;
  align-content: space-between;
`;

export const AuthorsContainer = styled.div`
  display: flex;
`;

export const StyledP = styled.p`
  color: ${props => props.color};
  margin-left: ${props => props.gap?props.gap:"0"}rem;
`;

