import React, { Component } from "react";

export default class Timer02 extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: null, currentDay: null };
    this.daysArray = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
  }

  componentWillMount() {
    this.getCurrentTime();
    console.log('getDate!!!!!!!!!',new Date()); // Tue Oct 30 2018 23:21:11 GMT-0700
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = "pm";

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = "am";
    }

    this.setState({
      currentTime: hour + ":" + minutes + ":" + seconds + " " + am_pm
    });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.currentDay}
        {this.state.currentTime}
      </div>
    );
  }
}
