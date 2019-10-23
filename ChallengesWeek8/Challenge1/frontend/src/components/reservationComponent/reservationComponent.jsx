import React, { Component } from "react";

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import styling
import './reservationComponent.scss'

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

  handleSubmit =(e) => {
    e.preventDefault();
    const { startDate, endDate } = this.state;

    console.log(startDate.toString(), endDate.toString());
  }

  render() {
    return (
      <div className="reservation-container">
        <div className="medium-container">
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
              startDate={new Date()}
              minDate={new Date()}
              maxDate={new Date().getDate() + 15}
              dateFormat="MMMM d, yyyy h:mm aa"
              showDisabledMonthNavigation
            />
          </div>
          <input type="submit" value="save reservation" />
        </div>
      </div>
    );
  }
}

export default ReservationComponent;
