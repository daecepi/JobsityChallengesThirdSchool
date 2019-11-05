
//STYLING
import styled from 'styled-components';
import { primaryGrey, thirdWhite, primaryDark, secondaryDark, primaryBlue, secondaryBlue } from "../../styles/colors";

export const Section1Container = styled.div`
  flex-basis: 95%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;

`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background: ${thirdWhite.rgb};
  flex-flow: column;
  padding: 1rem 4rem 0rem 4rem;
`;

export const MenuRight = styled.div`
  background: ${primaryDark.rgb};
  color: ${primaryGrey.rgb};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
`;

export const MenuRightP = styled.p`
  font-weight: bold;
  color: ${primaryGrey.rgb};
  font-size: 0.7rem;
  padding-bottom: 0.4rem;
`;

export const StyledMenuRightOl = styled.ol`
  overflow: hidden;
`;

export const StyledMenuRightLi = styled.li`
  font-size: 0.75rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

export const ListingManipulatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ContentFilterBox = styled.div`
  color: ${primaryGrey.rgb};
`;

export const StyledH2 = styled.h2`
  font-size: 1.1rem;
  font-family: 'SecondTitlePluton', Fallback, sans-serif;
  font-weight: bold;
  color: ${secondaryDark.rgb};
`;

export const StyledP = styled.p`
  text-decoration: none;
  color: ${primaryGrey.rgb};
`;

export const LayoutFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-between;
  color: ${primaryBlue.rgb};
`;

export const StyledI = styled.i`
  padding-left: 0.15rem;
  padding-right: 0.15rem;

  &:hover{
    color: ${secondaryBlue.rgb};
  }
`;

export const StyledPFormBox = styled.p`
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 700px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledFilterBoxSpan = styled.span`
  color: ${primaryBlue.rgb};

  &:hover{
    color: ${secondaryBlue.rgb};
  }
`;
