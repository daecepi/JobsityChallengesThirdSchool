import React, { Component } from "react";


//Rating component
import StarRatingComponent from "react-star-rating-component";

import "./bookMenu.scss";

class BookMenuComponent extends Component {

  state = {
  }

  handleClick =()=>{
    console.log("sda")
  }

  render() {

    return (
      <div onClick={this.props.changeToogle} className={this.props.styles}>
        <div  className="top-book-menu-con">
          <div onClick={this.handleClick} className="favorites-container">
            <i className="fas fa-heart"></i>
          </div>
          <div onClick={this.handleClick} className="read-later-container">
            <i className="fas fa-bookmark"></i>
          </div>
        </div>
        <div className="mid-book-menu-con">
          <div onClick={this.handleClick} className="readings-container">
            <i className="fas fa-book-open"></i>
          </div>
        </div>
        <div className="bottom-book-menu-con">
          <StarRatingComponent
            name={"user-rating" + this.props.id}
            starCount={5}
            value={this.props.averageRating}
            editing={true}
          />
        </div>
      </div>
    );
  }
}

export default BookMenuComponent;
