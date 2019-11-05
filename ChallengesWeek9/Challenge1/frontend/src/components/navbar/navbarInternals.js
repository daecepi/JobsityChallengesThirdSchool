//STYLING
import styled from "styled-components";
import { secondaryWhite, primaryGrey, primaryBlue, secondaryDark } from "../../styles/colors";

export const StyledHeader = styled.header`
  box-sizing: border-box;
  flex-basis: 5%;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`;

export const LogoContainer = styled.div``;

export const SearchBar = styled.div`
  font-family: "TitlePluton", Fallback, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid ${primaryBlue.rgb};
  padding-left: 1rem;
  padding-right: 1rem;
  background: ${secondaryWhite.rgb};
`;

export const NavBarTitle = styled.p`
  font-size: 1.5rem;
`;

//Menu section of the components styling
export const BorderX = styled.div`
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), white),
    linear-gradient(
      to bottom,
      rgb(247, 243, 235) 20%,
      rgba(68, 68, 68, 0.5) 20%,
      rgba(68, 68, 68, 0.5) 80%,
      rgb(247, 243, 235) 80%
    );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  background: ${secondaryWhite.rgb};
  height: 99%; /*Used to get the line next to the users container*/
  width: 99%; /*Used to get the line next to the users container*/
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  align-content: center;
  justify-content: center;

  &:hover {
    padding: 0.3em;
    border: 1px solid ${primaryGrey.rgb};
  }
`;

export const UserElementsDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const StyledPNav = styled.p`
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
`;

export const StyledINav = styled.i`
  align-self: center;
  font-size: 0.6em;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export const ProfileContainer = styled.div`
  height: 2em;
  width: 2em;
`;

export const ProfilePic = styled.img`
  height: 2em;
  width: 2em;
  border: 2px solid ${primaryBlue.rgb};
  border-radius: 50%;
`;

export const DDMenu = styled.div`
  display: none;
  position: absolute;
  background: ${secondaryWhite.rgb};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  color: gray;

  ${UserBoxContainer}:hover & {
    display: block;
    text-decoration: none;
    list-style-type: none;
  }
`;

export const StyledUlNav = styled.ul`
  list-style-type: none;
`;

export const StyledButtonNav = styled.button`
  font-weight: bold;
  width: 100%;
  background: none;
  border: none;

  &:hover {
    background: ${secondaryDark.rgb};
    color: ${secondaryWhite.rgb};
  }
`;

export const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;
