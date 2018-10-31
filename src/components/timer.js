import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
    super(props);
    const currentTime = new Date();
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
    };
  }

  render() {
      const hours = this.state.hours;
      const minutes = this.state.minutes;
      const seconds = this.state.seconds;
      const ampm = this.state.ampm;
    return (
      <div className="timer">
        {ampm}
        {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    );
  }
}