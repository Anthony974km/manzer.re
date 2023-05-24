import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


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
      <Card />
      <Card />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Accueil;
