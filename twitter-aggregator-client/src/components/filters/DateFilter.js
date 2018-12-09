import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap/lib";

import store from "../../store";
import { filterByDate } from "../../store/actions/tweets-actions";

class DateFilter extends Component {
  constructor() {
    super();

    this.state = {
      dateRange: false
    };
  }

  handleStartDate = date => {
    this.setState({
      startDate: new Date(date)
    });
  };

  handleEndDate = date => {
    this.setState({
      endDate: new Date(date)
    });
  };

  handleDateRange = () => {
    this.setState(prevState => ({
      dateRange: !prevState.dateRange
    }));
  };

  handleApply = () => {
    const { startDate, endDate } = this.state;
    if (!this.state.dateRange) {
      store.dispatch(filterByDate([startDate]));
    } else {
      store.dispatch(filterByDate([startDate, endDate]));
    }
  };

  render() {
    const { dateRange } = this.state;
    return (
      <div>
        <h3>Filter by Date:</h3>
        <span>Tweets From </span>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={dateRange ? this.state.endDate : undefined}
          maxDate={dateRange ? this.state.endDate : undefined}
          onChange={this.handleStartDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="Click to select a date"
        />

        {this.state.dateRange && (
          <Fragment>
            <span> up to </span>
            <DatePicker
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
              onChange={this.handleEndDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Click to select a date"
            />
          </Fragment>
        )}

        <Button
          style={{ marginLeft: "35px", marginRight: "35px" }}
          onClick={this.handleDateRange}
        >
          {dateRange ? "Don't use Date Range" : "Use Date Range"}
        </Button>

        <Button onClick={this.handleApply}>Apply Date Filters</Button>
      </div>
    );
  }
}

export default DateFilter;
