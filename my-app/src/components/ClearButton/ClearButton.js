import React from "react";

const ClearButton = (props) => (
  <div className="buttonBorder">
    <button onClick={props.click} className="clearButton">
      {" "}
      Clear
    </button>
  </div>
);
export default ClearButton;
