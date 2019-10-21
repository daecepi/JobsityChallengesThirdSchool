import React, { Component } from "react";

//import styling
import "./hoverDescriptor.scss";

//components used
import StarRatingComponent from "react-star-rating-component";

class HoverDescriptorComponent extends Component {
  state = {};
  render() {
    const {
      title,
      authors,
      release,
      description,
      averageRating,
      pageCount
    } = this.props;
    return (
      <div className="general-hover-container">
        <div className="hover-desc">
          <p className="blue-hover-text">{title}</p>
          <p className="gray-hover-text left-gap">{release}</p>
        </div>
        <div className="authors-container">
          <p className="white-hover-text">Novel by</p>
          <p className="gray-hover-text">{authors.join(",")}</p>
        </div>
        <div>
          <p>{pageCount}</p>
        </div>
        <div>
          <p className="gray-hover-text">SUMARY: </p>
          <p>{description}</p>
        </div>
        <div>
          <p className="gray-hover-text">RATING</p>
          <StarRatingComponent
            name={title}
            starCount={5}
            starColor={"#60B5D6"}
            value={averageRating}
          />
        </div>
        <div></div>
      </div>
    );
  }
}

export default HoverDescriptorComponent;
