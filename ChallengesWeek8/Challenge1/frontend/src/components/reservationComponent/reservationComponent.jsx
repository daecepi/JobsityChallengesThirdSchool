import React, { Component } from "react";

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import styling
import "./reservationComponent.scss";

//STYLING
import styled from 'styled-components';
import { primaryBlue, primaryDark, primaryWhite, primaryDarkTransparent } from '../../styles/colors';

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
  color: ${primaryBlue};
  padding: 5%;
  font-size: 30px;
  font-size: 3vw;
`;

const MediumContainer = styled.div

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
  };

  handleClose = (e) => {
    e.preventDefault();

    this.props.returnModalBack();
  };

  render() {
    return (
      <div className="reservation-container">
        <div className="medium-container">
          <div onClick={this.handleClose} className="close-container">
            <p>X</p>
          </div>
          <h1>Reservation proccess</h1>
          <div className="internal-separator">
            <DatePicker
              selected={new Date()}
              onChange={(date) => this.setStartDate(date)}
              selectsStart
              minDate={new Date()}
              maxDate={new Date().getDate() + 15}
              dateFormat="MMMM d, yyyy h:mm aa"
              showDisabledMonthNavigation
            />
          </div>
          <div className="button-container">
            <input type="submit" className="form-button" onSubmit={this.handleSubmit} value="save reservation" />
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationComponent;
