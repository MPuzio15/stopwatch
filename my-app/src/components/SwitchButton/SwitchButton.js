import React from "react";
import "./SwitchButton.css";

const SwitchButton = (props) => (
  <div className={props.active ? "buttonBorder on" : "buttonBorder"}>
    <button
      className={props.active ? "startButton on" : "startButton "}
      onClick={props.click}
    >
      {props.active ? "stop" : "start"}
    </button>
  </div>
);
export default SwitchButton;
