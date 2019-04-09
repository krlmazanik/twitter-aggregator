import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap/lib";
import ApplyButton from "./ApplyButton";

class DateFilter extends Component {
  constructor(props) {
    super(props);

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
    const { applyFilter } = this.props;

    if (!this.state.dateRange) {
      applyFilter("dateFilter", [startDate]);
    } else {
      applyFilter("dateFilter", [startDate, endDate]);
    }
  };

  render() {
    const { dateRange } = this.state;
    const { applied } = this.props;

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

        <ApplyButton onClick={this.handleApply} applied={applied}>
          Date Filter
        </ApplyButton>
      </div>
    );
  }
}

export default DateFilter;
