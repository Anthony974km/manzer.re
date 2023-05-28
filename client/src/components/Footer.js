import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <ul className="nav justify-content-center footer-container">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Nord
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Est
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Sud
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Ouest
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Tout
        </a>
      </li>
    </ul>
  );
};

export default Footer;
