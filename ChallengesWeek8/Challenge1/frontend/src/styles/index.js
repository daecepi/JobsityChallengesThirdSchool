import styled from "styled-components";

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

/**
 * FINISH THIS PART
 */
export const NotificationContainer = styled.span``;

export const InternarContainer = styled.div``;

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
`;