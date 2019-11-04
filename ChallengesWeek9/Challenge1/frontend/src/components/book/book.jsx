import React, { Component } from "react";

//Typpy pop up component
import Tippy from "@tippy.js/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

import { connect } from 'react-redux';

//Rating component
import StarRatingComponent from "react-star-rating-component";

//Hover component
import DescriptorComponent from "../descriptor/descriptor";
import BookMenuComponent from "../bookMenu/bookMenu";

import { 
  BookDiv,
  ImageContainer,
  ImgRef,
  BookTitle,
  RatingContainer,
  VisualIndicator
 } from './bookInternals';
import { primaryWhite, thirdGreyTransparent, primaryBlueTransparent2 } from "../../styles/colors";


class Book extends Component {
  state = {
    showMenu: false
  };

  toggleAppereance = (e) => {
    if (this.state.showMenu === false) {
      this.setState({
        showMenu: true
      });
    }
  };

  changeToogle = () => {
    this.setState({
      showMenu: false
    });
  };


  getVisualIndicator = (lent) => {
    //const { lent } = this.props.book;
    if(lent && lent.user === this.props.user._id){
      return (
        <VisualIndicator color={primaryBlueTransparent2.rgb} fontColor={primaryWhite.rgb}>
          <p>LENT by you</p>
        </VisualIndicator>
        );
    }else if (lent) {
      return (
        <VisualIndicator color={thirdGreyTransparent.rgb} fontColor={primaryWhite.rgb}>
          <p>LENT</p>
        </VisualIndicator>
        );
    }
    return "";
  }

  //Check star rating component
  render() {
    const { _id, title, description, imageLinks, authors, averageRating, publishedDate, lent } = this.props.book;
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
            {this.getVisualIndicator(lent)}
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
              hidden = {this.state.showMenu}
              book={this.props.book}
              bookId={this.props._id}
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

const mapStateToProps = state => {
  return {
    user: state.user.userLogged
  };
}

export default connect(mapStateToProps, null)(Book);
