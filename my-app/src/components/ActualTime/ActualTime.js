import React from "react";
import moment from "moment";
import "./ActualTime.css";

const ActualTime = () => {
    let now = moment().format('h:mm a');
    let data = moment().format('MMMM Do YYYY');
    return (
        <div className="time_wrapper">
            <div className="now">{now}</div>
            <div className="data">{data}</div>

        </div>

    )

}

export default ActualTime;