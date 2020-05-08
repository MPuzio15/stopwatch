import React from "react";
import moment from "moment";
import "./Timer.css";
function Timer({ time }) {
  const duration = moment.duration(time);
  const milliseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <span className="timer">
      <p>{duration.minutes()}:</p>
      <p>{duration.seconds()}:</p>
      <p>{milliseconds}</p>
    </span>
  );
}

export default Timer;
