import React, { Component } from "react";

//DatePicker used
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ReservationComponent extends Component {
  state = {
    startDate: new Date(),
    endDate: undefined
  };

  setStartDate = (startDate) => {
    this.setState({ startDate });
  };

  setEndDate = (endDate) => {
    this.setState({ endDate });
  };

  render() {
    return (
      <div className="reservation-container">
        <h1>ReservationProccess</h1>
        <DatePicker
          selected={new Date()}
          onChange={(date) => setStartDate(date)}
          selectsStart
          minDate={startDate}
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} />
        <input type="submit" value="save reservation" />
      </div>
    );
  }
}

export default ReservationComponent;
