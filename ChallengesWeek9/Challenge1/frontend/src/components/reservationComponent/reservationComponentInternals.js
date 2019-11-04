//STYLING
import styled from 'styled-components';
import { primaryBlue, primaryDarkTransparent, secondaryWhite, primaryDark } from '../../styles/colors';


export const ReservationContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${primaryDarkTransparent.rgb};
  z-index: 200000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: ${primaryBlue.rgb};
  padding: 5%;
  font-size: 30px;
  font-size: 3vw;
`;

export const MediumContainer = styled.div`
  border-radius: 30px;
  padding: 0.5rem;
  background: ${secondaryWhite.rgb};
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseContainer = styled.div`
  align-self: flex-end;
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  flex-basis: 10%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display:flex;
  background:red;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${primaryDark.rgb}
  width: 100%;
  text-align: center;
  padding-bottom: 0.3rem;
`;

export const FormButton = styled.input`
  height: 100%;
  width: 50%;
  border-radius: 20px;
`;
