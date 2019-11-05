import React, { Component } from "react";

//Conneciton to redux
import { connect } from "react-redux";
import { startReservationProccess } from "../../actions/booksActionCreator";
//Rating component
import StarRatings from "react-star-ratings";
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
    StyledI,
    ReturnBookContainer,
    StyledPOption
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

  fetchReturnBook = async () => {
    //Prepare information for request
    const url = this.props.baseEndpoint.concat("/users/"+this.props.user._id+"/returnBook/"+this.props.book._id);
    const token = localStorage.getItem("access_token");
    
    //Fetching the request on the API
    let authResult = await fetch(url,{
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
    }).then(res => res.json());
    
    //Handling of response
    if(authResult.status === 401){//Point where is not going to enter since inside protcted route
      this.displayNotification("Login again, your session have expired");
    }else if(authResult.state &&authResult.state === "Success"){
      this.displayNotification("Book returned");
    }else if(authResult.state){
      this.displayNotification(authResult.state);
    }else{
      this.displayNotification(authResult.response);
    }
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
            <ReturnBookContainer onClick={this.fetchReturnBook}>
                <StyledPOption>
                  return
                </StyledPOption>
            </ReturnBookContainer>
          </MidBookMenu>
          <BottomBookMenu>
            
          <StarRatings
              name={"user-rating" + this.props.id}
              numberOfStars={5}
              starRatedColor={"#60B5D6"}
              starEmptyColor={"#F0F0F0"} /* color of non-selected icons, default `#333` */
              rating={this.props.averageRating}
              starDimension="10px"
              starSpacing="0px"
            />
          </BottomBookMenu>
        </BookMenuContainer>

        <NotificationAlert ref="notificationAlert" />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseEndpoint: state.books.baseEndpoint,
    user: state.user.userLogged
  };
}

const mapDispatchToProps = dispatch => {
  return {
    startReservationProccess: (reservationId, startDate, endDate)=>{
      dispatch(startReservationProccess(reservationId, startDate, endDate))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookMenuComponent);
