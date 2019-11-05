//STYLING
import styled from "styled-components";
import { secondaryWhite, primaryGrey } from "../../styles/colors";

export const ContainerRegister = styled.div`
  background: ${secondaryWhite.rgb};
  box-shadow: 2px 10px 20px 0px black;
  height: 50%;
  width: 25%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (max-width: 580px) {
    width: 70%;
  }
`;

export const StyledH2 = styled.h2`
  margin-bottom: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const RegisterPTag = styled.p`
  font-size: 0.9vh;
`;

export const StyledLabel = styled.label`
  font-size: 0.8vw;
  align-self: flex-start;
  color: ${primaryGrey.rgb};
`;

export const SecondaryInput = styled.input`
  height: 5%;
  width: 100%;
  border-radius: 10px;
`;

export const RegisterButton = styled.button`
  border-radius: 20px;
  height: 5vh;
  width: 100%;
  margin-top: 2%;
  margin: 8px 0px;
  justify-self: flex-end;
`;
