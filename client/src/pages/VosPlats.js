import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
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

  const handleDelete = (meal) => {
    axios
      .delete(`http://localhost:5050/record/${meal._id}`)
      .then(() => {
        setMeals(meals.filter((m) => m._id !== meal._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <div className="container">
        <h1>Vos Plats</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La Réunion, sur Manzer.re.
        </p>
        <p>Ne manquez pas les menus du jour les plus alléchants.</p>
        <div className="card-container">
          {meals.map((meal, index) => (
            <Card key={index} meal={meal} onDelete={handleDelete} />
          ))}
        </div>
        <a
          href="/vos_plats/create"
          className="btn btn-primary rounded-circle add-button"
          style={{ position: "fixed", bottom: "30px", right: "30px" }}
        >
          <FaPlus style={{ width: "20px", height: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default VosPlats;
