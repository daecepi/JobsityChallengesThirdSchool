import React, { Component } from "react";

//Typpy pop up component
import Tippy from "@tippy.js/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

//Rating component
import StarRatingComponent from "react-star-rating-component";

//Hover component
import DescriptorComponent from "../descriptor/descriptor";

//Bringing styles
import "./book.scss";


class Book extends Component {
  //Check star rating component
  render() {
    const { id, title, description, imageLinks, authors, averageRating, publishedDate } = this.props.book;

    return (
      <Tippy
        content={
          <DescriptorComponent
            title={title}
            release={publishedDate}
            description={description}
            authors={authors}
            averageRating={averageRating}
          />
        }
        placement="right"
        theme="bootstrap"
        offset={0}
        hideOnClick={true}
      >
        <div className="book">
          <div className="image-container">
            <img
              className="img-ref"
              src={
                imageLinks.smallThumbnail
                  ? imageLinks.smallThumbnail
                  : "https://www.union.edu/sites/default/files/union-marketing-layer/201803/picture.jpg"
              }
              alt=""
            />
            <div className="book-menu-container">
              <div className="top-book-menu-con">
                <div className="favorites-container">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="read-later-container">
                  <i className="fas fa-bookmark"></i>
                </div>
              </div>
              <div className="mid-book-menu-con">
                <div className="readings-container">
                  <i className="fas fa-book-opened"></i>
                </div>
              </div>
              <div className="bottom-book-menu-con">
                <StarRatingComponent name={"user-rating" + id} starCount={5} value={averageRating} />
              </div>
            </div>
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
