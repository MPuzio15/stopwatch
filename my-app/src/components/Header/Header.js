import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faClock,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li className="liWrapper">
          <Link className="iconWrapper" to="/time">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <p>time</p>
          </Link>
        </li>
        <li className="liWrapper">
          <Link className="iconWrapper" to="/">
            <FontAwesomeIcon className="icon" icon={faStopwatch} />
            <p>stopwatch</p>
          </Link>
        </li>
        <li className="liWrapper">
          <Link className="iconWrapper" to="/timer">
            <FontAwesomeIcon className="icon" icon={faHourglassHalf} />
            <p>timer</p>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
