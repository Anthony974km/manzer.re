import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card-vosPlats";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const VosPlats = () => {
  let [meals, setMeals] = useState([]);

  const fetchMeals = () => {
    axios
      .get("http://localhost:5050/record/")
      .then((response) => setMeals(response.data));
  };

  useEffect(fetchMeals);

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
        <p>Ne manquez pas les menus du jour les plus alléchants.</p>
        <div className="card-container">
          {meals.map((meal, index) => (
            <Card key={index} meal={meal} />
          ))}
        </div>
        <a href="/vos_plats/create">Ajouter</a>
      </div>
    </div>
  );
};

export default VosPlats;
