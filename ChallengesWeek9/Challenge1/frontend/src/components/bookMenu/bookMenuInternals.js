
//STYLING
import styled from 'styled-components';
import { primaryWhite, primaryBlue } from "../../styles/colors";


export const BookMenuContainer = styled.div`
${props=> props.hidden? "display: block;" : "display: hidden;" }
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  background: rgba(0, 0, 0, 0.5);

  ${props=> props.clicked? "justify-content: space-between:" : "" }
  ${props => props.hidden === true? "z-index: 10005;" : "z-index: 10001;"}

  &:hover{
    display: block;
  }
`;

export const ReadLaterContainer = styled.div`
    border-radius: 20px;
`;

export const TopBookMenu = styled.div`
  display: flex;
  height: 10%;
  width:90%;
  margin:auto;
  margin-top: 5%;
  justify-content: space-between;
`;

export const MidBookMenu = styled.div`
  height:75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomBookMenu = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
`;

export const FavoritesContainer = styled.div`
`;

export const ReadingsContainer = styled.div`
`;

export const StyledI = styled.i`
    color: ${primaryWhite.rgb};

    &:hover{
      color: ${primaryBlue.rgb};
    }
`;
