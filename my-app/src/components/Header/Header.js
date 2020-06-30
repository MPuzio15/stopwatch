import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faClock,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li className="liWrapper">
          <NavLink className="iconWrapper" to="/time">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <p>time</p>
          </NavLink>
        </li>
        <li className="liWrapper">
          <NavLink className="iconWrapper" exact to="/">
            <FontAwesomeIcon className="icon" icon={faStopwatch} />
            <p>stopwatch</p>
          </NavLink>
        </li>
        <li className="liWrapper">
          <NavLink className="iconWrapper" to="/timer">
            <FontAwesomeIcon className="icon" icon={faHourglassHalf} />
            <p>timer</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
