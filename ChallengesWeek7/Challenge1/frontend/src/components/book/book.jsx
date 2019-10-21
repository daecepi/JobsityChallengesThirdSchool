import React, { Component } from "react";

//Typpy pop up component
import Tippy from "@tippy.js/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

//Rating component
import StarRatingComponent from "react-star-rating-component";

//Hover component
import HoverDescriptorComponent from "../hoverDescriptor/hoverDescriptor";

//Bringing styles
import "./book.scss";

class Book extends Component {
  //Check star rating component
  render() {
    const {
      id,
      title,
      description,
      imageLinks,
      authors,
      averageRating,
      publishedDate
    } = this.props.book;
    
    return (
      <Tippy
        content={
          <HoverDescriptorComponent
            title={title}
            release={publishedDate}
            description={description}
            authors={authors}
            averageRating={averageRating}
          />
        }
        trigger="click"
        placement="right"
        theme="bootstrap"
        offset={0}
        interactive={true}
        hideOnClick={true}
      >
        <div className="book">
          <div className="image-container">
            <img className="" src={imageLinks.smallThumbnail? imageLinks.smallThumbnail : "https://www.union.edu/sites/default/files/union-marketing-layer/201803/picture.jpg"} alt="" />
          </div>
          <p className="book-title">{title}</p>
          <p className="authors">{authors.join(", ")}</p>
          <div className="rating-container">
            <StarRatingComponent
                name={"rate" + id}
                starCount={5}
                starColor={"#60B5D6"}
                emptyStarColor={"#F0F0F0"} /* color of non-selected icons, default `#333` */
                value={averageRating}
            />
          </div>
        </div>
      </Tippy>
    );
  }
}

export default Book;
