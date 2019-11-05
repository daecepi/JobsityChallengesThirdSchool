import React, { Component } from "react";

//Conneciton to redux
import { connect } from "react-redux";
import { startReservationProccess } from "../../actions/booksActionCreator";
//Rating component
import StarRatingComponent from "react-star-rating-component";
import { NotificationContainer } from '../../styles';


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

import { 
    BookMenuContainer,
    ReadLaterContainer,
    TopBookMenu,
    MidBookMenu,
    BottomBookMenu,
    FavoritesContainer,
    ReadingsContainer,
    StyledI
  } from './bookMenuInternals';
import { primaryError } from "../../styles/colors";


class BookMenuComponent extends Component {

  displayNotYetImplementedMessage = () => {
    this.displayNotification("Functionality not yet implemented");
  }

  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <NotificationContainer>{message}</NotificationContainer>,
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

  getReservationModule = () => {
    if(this.props.book.types === "Digital"){
      return (
        <ReadLaterContainer
          onClick={() => {this.displayNotification("Digital books cannot be lent")}}
        >
          <StyledI color={ primaryError.rgb } className="fas fa-times fa-2x"></StyledI>}
        </ReadLaterContainer>
        );
      }else if(this.props.book.lent) {
        return (
          <ReadLaterContainer
            onClick={() => {this.displayNotification("Book has been already lent")}}
          >
            <StyledI color={ primaryError.rgb } className="fas fa-times fa-2x"></StyledI>}
          </ReadLaterContainer>
          );
      }
    return (
      <ReadLaterContainer
        onClick={ this.handleReservationProccess }
      >
        <StyledI className="fas fa-bookmark fa-2x"></StyledI>
      </ReadLaterContainer>
    );
  }

  /**
   *
   * The heart icon is for a proccess of adding to favorites
   * The Book mark is for adding it to the readings (reservation component)
   *
   */
  render() {
    const reservationItem = this.getReservationModule();
    return (
      <>
        <BookMenuContainer onClick={this.props.changeToogle} hidden={this.props.hidden}>
          <TopBookMenu>
            <FavoritesContainer onClick={this.displayNotYetImplementedMessage}  className="favorites-container">
              <StyledI className="fas fa-heart fa-2x"></StyledI>
            </FavoritesContainer>
            { reservationItem }
          </TopBookMenu>
          <MidBookMenu>
            <ReadingsContainer onClick={this.displayNotYetImplementedMessage}>
              <StyledI className="fas fa-book-open fa-5x"></StyledI>
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
