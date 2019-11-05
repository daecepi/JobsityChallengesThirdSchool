import React, { Component } from "react";


//components used
import StarRatings from "react-star-ratings";
import { primaryBlue,  secondaryGrey, primaryWhite, primaryGrey } from "../../styles/colors";

import { 
  GeneralHoverContainer,
  HoverDesc,
  AuthorsContainer,
  StyledP
 } from './descriptorInternals';

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
          <StarRatings
              name={title}
              numberOfStars={5}
              starRatedColor={"#60B5D6"}
              starEmptyColor={"#F0F0F0"} /* color of non-selected icons, default `#333` */
              rating={averageRating}
              starDimension="10px"
              starSpacing="0px"
            />
        </div>
      </GeneralHoverContainer>
    );
  }
}

export default DescriptorComponent;
