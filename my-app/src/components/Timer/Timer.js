import React, { Component } from "react";
import "./Timer.css";
import SwitchButton from "../StopwatchMain/SwitchButton/SwitchButton"
import ClearButton from "../StopwatchMain/ClearButton/ClearButton"

class Timer extends Component {

    state = {
        userSeconds: 0,
        userMinutes: 0,
        userHours: 0,
        time: 0,
        active: false,
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: parseInt(value),
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.active) {
            this.removeInterval();
        } else {
            this.interval = setInterval(this.countDown, 1000)
        }
        this.setState({
            active: !this.state.active,
        });
    }

    countDown = () => {
        // let time = this.state.userSeconds + (this.state.userMinutes * 60) + (this.state.userHours * 3600);
        // time--;
        // let secunds = time % 60;
        // let minutes = Math.floor(time / 60)
        // let hours = Math.floor(time / 3600);
        let secunds = this.state.userSeconds;
        let minutes = this.state.userMinutes;
        let hours = this.state.userHours;

        if (secunds > 0) {
            secunds--;
        }
        else if (secunds === 0) {
            if ((minutes === 0 || minutes === "") && (hours === 0 || hours === "")) {
                this.removeInterval();
            }
            else {
                minutes--;
                secunds = 59;
            }
        }
        else if (secunds < 0) {
            this.removeInterval();
        }
        else if (minutes === 0) {
            if (hours === 0 && secunds === 0) {
                this.removeInterval();

            }
            else {
                minutes = 59;
                hours--;
            }
        }
        if (hours === 0 && minutes === 0 && secunds === 0) {
            this.removeInterval();
        }

        this.setState({
            userHours: hours,
            userMinutes: minutes,
            userSeconds: secunds,
        })

    }
    handleClear = () => {
        debugger;
        this.removeInterval();
        this.setState({
            active: !this.state.active,
            userSeconds: 0,
            userMinutes: 0,
            userHours: 0,
        });
    };
    removeInterval = () => {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div className="timer_wrapper">

                <form className="timer" onSubmit={this.handleSubmit} noValidate>
                    <div className="labels">
                        <label htmlFor="hours" className="number-wrapper">
                            <input id="hours" type="number" min='0' name="userHours" value={this.state.userHours} onChange={this.handleChange} />:
                    </label>
                        <label htmlFor="minutes" className="number-wrapper">
                            <input id="minutes" type="number" min='0' max='60' name="userMinutes" value={this.state.userMinutes} onChange={this.handleChange} />:
                    </label>
                        <label htmlFor="secunds" className="number-wrapper">
                            <input id="secunds" type="number" min='0' max='60' name="userSeconds" value={this.state.userSeconds} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="buttonsCont timer">
                        <SwitchButton
                            type="submit"
                            active={this.state.active}
                            id="switchClick"
                        />
                        <ClearButton
                            click={this.handleClear}
                            active={this.state.active} />
                    </div>
                </form>

            </div>
        )
    }
}
export default Timer;