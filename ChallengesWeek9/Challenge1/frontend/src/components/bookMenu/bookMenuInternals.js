//STYLING
import styled from "styled-components";
import { primaryWhite, primaryBlue } from "../../styles/colors";

export const BookMenuContainer = styled.div`
  ${(props) => (props.hidden ? "display: block;" : "display: hidden;")}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  ${(props) => (props.clicked ? "justify-content: space-between:" : "")}
  ${(props) => (props.hidden === true ? "z-index: 10005;" : "z-index: 10001;")}

  &:hover {
    display: block;
  }
`;

export const ReadLaterContainer = styled.div`
  border-radius: 20px;
`;

export const TopBookMenu = styled.div`
  display: flex;
  height: 10%;
  width: 90%;
  margin: auto;
  margin-top: 5%;
  justify-content: space-between;
`;

export const MidBookMenu = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomBookMenu = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
`;

export const FavoritesContainer = styled.div``;

export const ReadingsContainer = styled.div``;

export const StyledI = styled.i`
  color: ${(props) => (props.color ? props.color : primaryWhite.rgb)};

  &:hover {
    color: ${(props) => (props.color ? props.color : primaryBlue.rgb)};
  }
`;

export const ReturnBookContainer = styled.div`
  background: rgba(0, 0, 0, 0);
  border: 1px solid ${primaryWhite.rgb};
  color: ${primaryWhite.rgb};
  border-radius: 20px;

  &:hover {
    border: 1px solid ${primaryBlue.rgb};
    color: ${primaryBlue.rgb};
  }
`;

export const StyledPOption = styled.p`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-weigth: bold;
`;
