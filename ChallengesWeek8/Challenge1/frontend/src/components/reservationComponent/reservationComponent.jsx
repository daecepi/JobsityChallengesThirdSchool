import React, { Component } from "react";

import { connect } from "react-redux";

import { updateReservationInfo, finishReservationProccess } from '../../actions/booksActionCreator';

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//STYLING
import styled from 'styled-components';
import { InternalSeparator } from '../../styles';
import { primaryBlue, primaryDarkTransparent, secondaryWhite, primaryDark } from '../../styles/colors';

const ReservationContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${primaryDarkTransparent.rgb};
  z-index: 200000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  text-align: center;
  color: ${primaryBlue.rgb};
  padding: 5%;
  font-size: 30px;
  font-size: 3vw;
`;

const MediumContainer = styled.div`
  border-radius: 30px;
  padding: 0.5rem;
  background: ${secondaryWhite.rgb};
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseContainer = styled.div`
  align-self: flex-end;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  flex-basis: 10%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display:flex;
  background:red;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${primaryDark.rgb}
  width: 100%;
  text-align: center;
  padding-bottom: 0.3rem;
`;

const FormButton = styled.input`
  height: 100%;
  width: 50%;
  border-radius: 20px;
`;

class ReservationComponent extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");

    console.log("user",this.props.user);
    console.log("Book", this.props.bookId);
    console.log("StartDate", this.props.startDate);
    console.log("endDate", this.props.endDate);

    //let authResult = fetch();
  };

  handleClose = (e) => {
    e.preventDefault();
    this.props.finishReservationProccess();
  };


  updateEndDate = (date) => {
    console.log(this.props.bookId);

    const endDate = new Date(date);
    this.props.updateReservationInfo(this.props.bookId, new Date(), endDate);
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
                selected={new Date()}
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
