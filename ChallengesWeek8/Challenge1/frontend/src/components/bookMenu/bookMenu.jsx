import React, { Component } from "react";

//Conneciton to redux
import { connect } from "react-redux";
import { startReservationProccess } from "../../actions/booksActionCreator";
//Rating component
import StarRatingComponent from "react-star-rating-component";


//STYLING
import styled from 'styled-components';
import { NotificationContainer } from '../../styles';

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";
import { primaryWhite, primaryBlue } from "../../styles/colors";


const BookMenuContainer = styled.div`
${props=> props.hidden? "display: block;" : "display: hidden;" }
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  background: rgba(0, 0, 0, 0.5);

  ${props=> props.clicked? "justify-content: space-between:" : "" }
  ${props => props.hidden === true? "z-index: 10005;" : "z-index: 10001;"}

  &:hover{
    display: block;
  }
`;

const ReadLaterContainer = styled.div`
    border-radius: 20px;
`;

const TopBookMenu = styled.div`
  display: flex;
  height: 10%;
  width:90%;
  margin:auto;
  margin-top: 5%;
  justify-content: space-between;
`;

const MidBookMenu = styled.div`
  height:75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBookMenu = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
`;

const FavoritesContainer = styled.div`
`;

const ReadingsContainer = styled.div`
`;

const StyledI = styled.i`
    color: ${primaryWhite.rgb};

    &:hover{
      color: ${primaryBlue.rgb};
    }
`;

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

  /**
   *
   * The heart icon is for a proccess of adding to favorites
   * The Book mark is for adding it to the readings (reservation component)
   *
   */
  render() {
    return (
      <>
        <BookMenuContainer onClick={this.props.changeToogle} hidden={this.props.hidden}>
          <TopBookMenu>
            <FavoritesContainer onClick={this.displayNotYetImplementedMessage}  className="favorites-container">
              <StyledI className="fas fa-heart fa-2x"></StyledI>
            </FavoritesContainer>
            <ReadLaterContainer
              onClick={this.handleReservationProccess}
            >
              <StyledI className="fas fa-bookmark fa-2x"></StyledI>
            </ReadLaterContainer>
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
