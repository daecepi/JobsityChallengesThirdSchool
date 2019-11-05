//STYLING
import styled from "styled-components";
import { secondaryWhite, primaryError } from "../../styles/colors";

export const LoginContainer = styled.div`
  background: ${secondaryWhite.rgb};
  box-shadow: 2px 10px 20px 0px black;
  height: 40%;
  width: 25%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;

  @media (max-width: 580px) {
    padding-top: 1rem;
    justify-content: flex-start;
    width: 50vw;
  }
`;

export const LoginTitle = styled.h1`
  justify-self: center;
  align-self: center;
  flex-grow: 5;
  justify-content: center;
  padding-bottom: black;
`;

export const InputContainer = styled.div`
  width: 90%;
`;

export const SubmitButton = styled.input`
  display: block;
  border-radius: 20px;
  width: 90%;
  flex-grow: 1;
  margin-top: 2%;
  margin: 8px 0;
`;

export const MessageSpan = styled.span`
  font-size: 0.7rem;
  color: ${primaryError.rgb};
`;
