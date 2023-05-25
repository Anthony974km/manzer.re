import React from "react";
import Navbar from "../components/Navbar";
import Create from "../components/Create";

const VosPlats = () => {
  return (
    <div className="app">
        <nav>
      <Navbar />
      </nav>
      <div className="container">
        <h1>Vos Plats</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La
          Réunion, sur Manzer.re.
        </p>
      </div>
      <Create/>
    </div>
  );
};

export default VosPlats;
