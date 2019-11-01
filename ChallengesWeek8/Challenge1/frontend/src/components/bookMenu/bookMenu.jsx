import React, { Component } from "react";

//Conneciton to redux
import { connect } from "react-redux";
import { startReservationProccess } from "../../actions/booksActionCreator";
//Rating component
import StarRatingComponent from "react-star-rating-component";

import "./bookMenu.scss";

//STYLING
import styled from 'styled-components';

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";


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

  displayNotYetImplementedMessage = () => {
    this.displayNotification("Functionality not yet implemented");
  }

  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <div className="notification-container">{message}</div>,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  };

  handleReservationProccess = () => {
    const startDate = new Date();
    const endDate = new Date();
    this.props.startReservationProccess(this.props.book._id, startDate, endDate);
  }

  /**
   *
   * The heart icon is for a proccess of adding to favorites
   * The Book mark is for adding it to the readings (reservation component)
   *
   */
  render() {
    return (
      <>
        <BookMenuContainer onClick={this.props.changeToogle} className={this.props.styles}>
          <TopBookMenu>
            <FavoritesContainer onClick={this.displayNotYetImplementedMessage}  className="favorites-container">
              <i className="fas fa-heart"></i>
            </FavoritesContainer>
            <ReadLaterContainer
              onClick={this.handleReservationProccess}
            >
              <i className="fas fa-bookmark"></i>
            </ReadLaterContainer>
          </TopBookMenu>
          <MidBookMenu>
            <ReadingsContainer onClick={this.displayNotYetImplementedMessage}>
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

        <NotificationAlert ref="notificationAlert" />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startReservationProccess: (reservationId, startDate, endDate)=>{
      dispatch(startReservationProccess(reservationId, startDate, endDate))
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(BookMenuComponent);
