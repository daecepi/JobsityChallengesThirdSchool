import React, { Component } from "react";

import { connect } from "react-redux";

import { updateReservationInfo, finishReservationProccess } from '../../actions/booksActionCreator';

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

import { InternalSeparator, NotificationContainer } from '../../styles';
import { 
  ReservationContainer,
  StyledH1,
  MediumContainer,
  CloseContainer,
  ButtonContainer,
  Form,
  StyledLabel,
  FormButton
 } from './reservationComponentInternals';

class ReservationComponent extends Component {

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

  handleSubmit = async (e) => {
    e.preventDefault();

    const url = this.props.baseEndpoint.concat("/books/lend");
    console.log("Date to send", this.props.startDate.toString(),  this.props.endDate.toString());
    const data = {userId: this.props.user._id, bookId: this.props.bookId, startDate: this.props.startDate.toString(), endDate: this.props.endDate.toString()};
    const token = localStorage.getItem("access_token");
    

    let authResult = await fetch(url,{
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
    
    if(authResult.status === 401){//Point where is not going to enter since inside protcted route
      this.displayNotification("Login again, your session have expired");
    }else if(authResult.state &&authResult.state === "Success"){
      this.props.finishReservationProccess();
    }else if(authResult.state){
      this.displayNotification(authResult.state);
    }else{
      this.displayNotification(authResult.response);
    }
    console.log("Answer", authResult);
  };

  handleClose = (e) => {
    e.preventDefault();
    this.props.finishReservationProccess();
  };


  updateEndDate = (date) => {
    const endDate = new Date(date);
    this.props.updateReservationInfo(new Date(), endDate);
  }

  render() {
    return (
      <ReservationContainer>
        <MediumContainer>
          <CloseContainer onClick={this.handleClose}>
            <p>X</p>
          </CloseContainer>
          <StyledH1>Reservation proccess</StyledH1>
          <Form onSubmit={this.handleSubmit}>
            <InternalSeparator>
              <StyledLabel>Return date:</StyledLabel>
              <DatePicker
                style={{width:"90%"}}
                selected={this.props.endDate}
                onChange={(date) => this.updateEndDate(date)}
                selectsStart
                startDate={new Date()}
                minDate={new Date()}
                maxDate={new Date().setDate(new Date().getDate()+15)}
                dateFormat="MMMM d, yyyy h:mm aa"
                showDisabledMonthNavigation
              />
            </InternalSeparator>
            <ButtonContainer>
              <FormButton type="submit" value="make" />
            </ButtonContainer>
          </Form>
        </MediumContainer>
        <NotificationAlert ref="notificationAlert" />
      </ReservationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseEndpoint: state.books.baseEndpoint,
    bookId: state.books.bookId,
    user: state.user.userLogged,
    startDate: state.books.startDate,
    endDate: state.books.endDate
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateReservationInfo: (bookId, startDate, endDate) => {
      dispatch(updateReservationInfo(bookId, startDate, endDate));
    },
    finishReservationProccess: () => {
      dispatch(finishReservationProccess());
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationComponent);
