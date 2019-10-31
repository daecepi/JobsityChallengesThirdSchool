import React, { Component } from "react";

//Rating component
import StarRatingComponent from "react-star-rating-component";

import "./bookMenu.scss";

//STYLING
import styled from 'styled-components';

const BookMenuContainer = styled.div`
  display: hidden;
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  background: rgba(0, 0, 0, 0.5);

  ${props=> props.clicked? "display: block;" : "" }
  ${props=> props.clicked? "justify-content: space-between" : "" }

  &:hover{
    display: block;
  }
`;

const StyledI = styled.i`
  color:white;
`;

const ReadLaterContainer = styled.div`
    background: white;
    border-radius: 20px;
`;

const TopBookMenu = styled.div`
  display: flex;
  width:90%;
  margin:auto;
  margin-top: 1rem;
  justify-content: space-between;
`;

const MidBookMenu = styled.div``;

const BottomBookMenu = styled.div``;

const FavoritesContainer = styled.div`
`;

const ReadingsContainer = styled.div`
`;


class BookMenuComponent extends Component {

  works() {
    console.log("All right");
  }

  /**
   *
   * The heart icon is for a proccess of adding to favorites
   * The Book mark is for adding it to the readings (reservation component)
   *
   */
  render() {
    return (
      <BookMenuContainer onClick={this.props.changeToogle} className={this.props.styles}>
        <TopBookMenu>
          <FavoritesContainer onClick={this.handleClick} className={this.props.styles} className="favorites-container">
            <i className="fas fa-heart"></i>
          </FavoritesContainer>
          <ReadLaterContainer
            onClick={() => {
              this.props.setBookToOperate(this.props.book);
            }}
          >
            <i className="fas fa-bookmark"></i>
          </ReadLaterContainer>
        </TopBookMenu>
        <MidBookMenu>
          <ReadingsContainer onClick={this.handleClick}>
            <i className="fas fa-book-open"></i>
          </ReadingsContainer>
        </MidBookMenu>
        <BottomBookMenu>
          <StarRatingComponent
            name={"user-rating" + this.props.id}
            starCount={5}
            value={this.props.averageRating}
            editing={true}
          />
        </BottomBookMenu>
      </BookMenuContainer>
    );
  }
}

export default BookMenuComponent;
