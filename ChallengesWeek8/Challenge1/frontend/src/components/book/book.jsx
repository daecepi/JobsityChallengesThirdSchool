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
import BookMenuComponent from "../bookMenu/bookMenu";


//STYLING
import styled from 'styled-components';
import { secondaryDark } from '../../styles/colors';

const BookDiv = styled.div`
  display: flex;
  flex-basis: 18%;
  margin-left: auto;
  flex-flow: column;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  flex-basis: 83%;
  position: relative;
  z-index: 1;
`;

const ImgRef = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

//Style for the books title inthe container
const BookTitle = styled.p`
  font-family: "TitlePluton", Fallback, sans-serif;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${secondaryDark};
`;

const RatingContainer = styled.div`
  align-self: flex-start;
  justify-self: flex-start;
`;


class Book extends Component {
  state = {
    toggle: true,
    styles: "book-menu-container"
  };

  toggleAppereance = (e) => {
    if (this.state.toggle) {
      this.setState({
        toggle: false,
        styles: "book-menu-container occult-class"
      });
    }
  };

  changeToogle = () => {
    this.setState({
      toggle: true,
      styles: "book-menu-container"
    });
  };

  //Check star rating component
  render() {
    const { _id, title, description, imageLinks, authors, averageRating, publishedDate } = this.props.book;
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
        <BookDiv>
          <ImageContainer>
            <ImgRef
              id={_id}
              className="img-ref"
              onClick={this.toggleAppereance}
              src={
                imageLinks.smallThumbnail
                  ? imageLinks.smallThumbnail
                  : "https://www.union.edu/sites/default/files/union-marketing-layer/201803/picture.jpg"
              }
              alt="presentation"
            />
            <BookMenuComponent
              id={_id + "menu"}
              book={this.props.book}
              averageRating={averageRating}
              styles={this.state.styles}
              changeToogle={this.changeToogle}
              setBookToOperate={this.props.setBookToOperate}
            />
          </ImageContainer>
          <BookTitle>{title}</BookTitle>
          <p className="authors">{authors.join(", ")}</p>
          <RatingContainer>
            <StarRatingComponent
              name={"rate" + _id}
              starCount={5}
              starColor={"#60B5D6"}
              emptyStarColor={"#F0F0F0"} /* color of non-selected icons, default `#333` */
              value={averageRating}
            />
          </RatingContainer>
        </BookDiv>
      </Tippy>
    );
  }
}

export default Book;
