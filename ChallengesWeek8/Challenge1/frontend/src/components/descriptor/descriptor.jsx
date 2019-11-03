import React, { Component } from "react";


//components used
import StarRatingComponent from "react-star-rating-component";

//STYLING
import styled from 'styled-components';
import { primaryBlue,  secondaryGrey, primaryWhite, primaryGrey } from "../../styles/colors";

const GeneralHoverContainer = styled.div`
  margin: 0.4rem;
  height: 100%;
  width: 100%;
`;

const HoverDesc = styled.div`
  width: 100%;
  display: flex;
  align-content: space-between;
`;

const AuthorsContainer = styled.div`
  display: flex;
`;

const StyledP = styled.p`
  color: ${props => props.color};
  margin-left: ${props => props.gap?props.gap:"0"}rem;
`;



class DescriptorComponent extends Component {
  render() {
    const { title, authors, release, description, averageRating, pageCount } = this.props;

    return (
      <GeneralHoverContainer>
        <HoverDesc>
          <StyledP color={primaryBlue.rgb}>{title}</StyledP>
          <StyledP color={secondaryGrey.rgb} gap={0.3}>
            {typeof release !== "undefined" && release.indexOf >= "-" ? release.split("-")[0] : release}
          </StyledP>
        </HoverDesc>
        <AuthorsContainer>
          <StyledP color={primaryWhite.rgb} gap={0.3}>Novel by</StyledP>
          <StyledP color={primaryGrey.rgb}  gap={0.3}>{authors.join(",")}</StyledP>
        </AuthorsContainer>
        <div>
          <p>{pageCount}</p>
        </div>
        <div>
          <StyledP color={secondaryGrey.rgb}>SUMARY: </StyledP>
          <p>
            {typeof description !== "undefined" && description.length >= 250 ? description.substr(0, 250) : description}
          </p>
        </div>
        <div>
          <StyledP color={secondaryGrey.rgb}>RATING: </StyledP>
          <StarRatingComponent name={title} starCount={5} starColor={"#60B5D6"} value={averageRating} />
        </div>
      </GeneralHoverContainer>
    );
  }
}

export default DescriptorComponent;
