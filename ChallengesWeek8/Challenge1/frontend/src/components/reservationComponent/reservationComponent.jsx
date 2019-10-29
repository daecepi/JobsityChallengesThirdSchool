import React, { Component } from "react";

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import styling
import "./reservationComponent.scss";

//STYLING
import styled from 'styled-components';
import { InternalSeparator } from '../../styles/index';
import { primaryBlue, primaryDarkTransparent, secondaryWhite } from '../../styles/colors';

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
  background:red;
  display:flex;
  justify-content: center;
`;

const FormButton = styled.input`
  height: 100%;
  width: 50%;
  border-radius: 20px;
`;

class ReservationComponent extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  setStartDate = (startDate) => {
    this.setState({ startDate });
  };

  setEndDate = (endDate) => {
    this.setState({ endDate });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("done");
  };

  handleClose = (e) => {
    e.preventDefault();
    this.props.returnModalBack();
  };

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
              <Label>Return date:</Label>
              <DatePicker
                style={{width:"90%"}}
                selected={new Date()}
                onChange={(date) => this.setStartDate(date)}
                selectsStart
                startDate={new Date()}
                minDate={new Date()}
                maxDate={new Date().setDate(new Date().getDate()+15)}
                dateFormat="MMMM d, yyyy h:mm aa"
                showDisabledMonthNavigation
              />
            </InternalSeparator>
            <ButtonContainer>
              <FormButton type="submit" value="make reservation" />
            </ButtonContainer>
          </Form>
        </MediumContainer>
      </ReservationContainer>
    );
  }
}

export default ReservationComponent;
