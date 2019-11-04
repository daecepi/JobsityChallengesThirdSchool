import React, { Component } from "react";

import { connect } from "react-redux";

import { updateReservationInfo, finishReservationProccess } from '../../actions/booksActionCreator';

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { InternalSeparator } from '../../styles';
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

  handleSubmit = async (e) => {
    e.preventDefault();



    const url = this.props.baseEndpoint.concat("/books/lend");
    const data = {userId: this.props.user._id, bookId: this.props.bookId, startDate: this.props.startDate.toGMTString(), endDate: this.props.endDate.toGMTString()};
    const token = localStorage.getItem("access_token");
    

    let authResult = await fetch(url,{
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
    console.log(authResult);

  };

  handleClose = (e) => {
    e.preventDefault();
    this.props.finishReservationProccess();
  };


  updateEndDate = (date) => {
    console.log(this.props.endDate);

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
