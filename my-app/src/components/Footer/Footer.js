import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <div className="icons">
      <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
      <FontAwesomeIcon className="icon" icon={faPhoneSquare} />
    </div>
    <p className="adres">&copy; OnlineTimeApp.pl</p>
  </footer>
);

export default Footer;
