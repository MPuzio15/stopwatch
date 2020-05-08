import React, { Component } from "react";
import "./App.css";
import SwitchButton from "../SwitchButton/SwitchButton";
import ClearButton from "../ClearButton/ClearButton";
import Timer from "../Timer/Timer";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      active: false,
    };
  }

  handleClick = () => {
    debugger;
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
    // ReactDom.getElementById("switchClick").classList.toggle("active");
  };
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
    debugger;
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
    return (
      <BrowserRouter>
        <div className="wholeApp">
          <Header />
          <Timer time={time} />
          <div className="buttonsCont">
            <SwitchButton
              click={this.handleClick}
              active={this.state.active}
              id="switchClick"
            />
            <ClearButton className="buttonBorder" click={this.handleClear} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
