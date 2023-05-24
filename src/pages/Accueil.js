import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Accueil = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <h1>Menu du jour</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La
          Réunion, sur Manzer.re.
        </p>
      </div>
      <Card />
      <footer>
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
</footer>
    </div>
  );
};

export default Accueil;
