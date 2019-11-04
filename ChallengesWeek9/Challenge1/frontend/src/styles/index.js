import styled from "styled-components";

import { primaryBlue, primaryBlueTransparent } from "./colors";

import backgroundImage from "../images/LoginImage.jpg";


export const MessageTag = styled.span`
  font-size: 0.7rem;
`;

export const SuccessMessageColor = styled.span`
  color: $primary-success;
`;

export const ErroMessageColor = styled.span`
  color: $error-success;
`;


/*
* Common containers
*/
export const FullContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 580px){
    &{    
      padding-top: 1rem;
      justify-content: flex-start;
    }
  }
`;

export const MenuBox = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const InternalSeparator = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MoveButton = styled.button`
  margin-top: 3rem;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const NotificationContainer = styled.div`
  background: ${primaryBlueTransparent.rgb};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  border-radius: 20px;
`;

//Default style for A tags inside the application
export const defaultStyleLink = {
  color: primaryBlue.rgb,
  textDecoration: 'none'
};
