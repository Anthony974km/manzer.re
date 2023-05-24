import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active border" aria-current="page" href="#">
          Nord
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link border" href="#">
          Est
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link border" href="#">
          Sud
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link border" href="#">
          Ouest
        </a>
      </li>
    </ul>
  );
};

export default Footer;
