import React, { Component } from "react";

//Typpy pop up component
import Tippy from "@tippy.js/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

import { connect } from 'react-redux';

//Rating component
import StarRatings from 'react-star-ratings';

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

  getImageAsset = () => {
    const { imageLinks } = this.props.book;
    if(imageLinks[0]){
      return imageLinks[0].smallThumbnail;
    }else if(imageLinks.smallThumbnail){
      return imageLinks.smallThumbnail;
    }
    return "https://www.union.edu/sites/default/files/union-marketing-layer/201803/picture.jpg";
  }

  //Check star rating component
  render() {
    const { _id, title, description, authors, averageRating, publishedDate, lent } = this.props.book;
    const imageLink = this.getImageAsset();
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
              src={imageLink}
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
            <StarRatings
              name={"rate" + _id}
              numberOfStars={5}
              starRatedColor={"#60B5D6"}
              starEmptyColor={"#F0F0F0"} /* color of non-selected icons, default `#333` */
              rating={averageRating}
              starDimension="10px"
              starSpacing="0px"
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
