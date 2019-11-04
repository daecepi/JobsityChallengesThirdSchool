
//STYLING
import styled from 'styled-components';
import { primaryBlue } from '../../styles/colors';


export const PrimaryInput = styled.input`
  border: 2px solid ${primaryBlue.rgb};
  border-radius: 40px;
  margin: 8px 0;
  outline: none;
  box-sizing: border-box;
  padding: 8px;
  transition: 0.1s;
  width: 100%;
  font-size: 0.7rem;
  height: 2rem;

  ${props => props.width? "width: " + props.width + ";" : "width: 100%;"}

  &:focus{
    border-color: ${primaryBlue.rgb};
    box-shadow: 0 0 8px 0 ${primaryBlue.rgb};
  }
`;

export const InputWithIcon = styled.div`
  position: relative;

  & ${PrimaryInput}{
    padding-left: 40px;
  }

  & ${PrimaryInput} + i {
    color: ${primaryBlue.rgb}
  }

  & i {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 9px 8px;
    color: #aaa;
    transition: 0.3s;
  }
`;

export const StyledI = styled.i``;