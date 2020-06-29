import React, { Component } from "react";
import moment from "moment";
import "./Stopwatch.css";
import SwitchButton from "./SwitchButton/SwitchButton";
import ClearButton from "./ClearButton/ClearButton";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      active: false,
    };
  }

  handleClick = () => {
    if (this.state.active) {
      this.removeInterval();
    } else {
      if (this.state.now !== 0) {
        this.resume();
      } else {
        this.addSecond();
      }
    }
    this.setState({
      active: !this.state.active,
    });
  }
  handleClear = () => {
    this.removeInterval();
    this.setState({
      now: 0,
      start: 0,
    });
  };

  addSecond = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
    });
    this.interval = setInterval(() => {
      this.setState({
        now: new Date().getTime(),
      });
    }, 100);
  };
  resume = () => {
    let time = this.state.now - this.state.start;

    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
    });
    this.interval = setInterval(() => {
      this.setState({
        now: time + new Date().getTime(),
      });
    }, 100);
  };
  removeInterval = () => {
    clearInterval(this.interval);
  };


  render() {
    const { now, start } = this.state;
    const time = now - start;
    const duration = moment.duration(time);
    const milliseconds = Math.floor(duration.milliseconds() / 10);
    return (
      <div className="timer">
        <div className="labels">
          <label className='number_wrapper'>{duration.minutes()}:</label>
          <label className='number_wrapper'>{duration.seconds()}:</label>
          <label className='number_wrapper'>{milliseconds}</label>
        </div>
        <div className="buttonsCont timer">
          <SwitchButton
            click={this.handleClick}
            active={this.state.active}
            id="switchClick"
          />
          <ClearButton className="buttonBorder" click={this.handleClear} />
        </div>
      </div>
    )
  }
}

export default Stopwatch;
