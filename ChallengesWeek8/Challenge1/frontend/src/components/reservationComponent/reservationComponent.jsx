import React, { Component } from "react";

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import styling
import "./reservationComponent.scss";

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
          <h1>ReservationProccess</h1>
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
          <div className="internal-separator">
            <DatePicker
              onChange={(date) => this.setEndDate(date)}
              selectsEnd
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
