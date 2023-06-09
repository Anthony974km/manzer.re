import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import Card from "../components/Card-vosPlats";
import Loader, { Circles } from "react-loader-spinner";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const VosPlats = () => {
  const [meals, setMeals] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5050/record/?search=${searchInput}`) //A changer lors du déploiement server
      .then((response) => {
        setMeals(response.data);
        setIsLoading(false);
      });
  };

  useEffect(fetchMeals, [searchInput]);

  const handleDelete = (meal) => {
    axios
      .delete(`http://localhost:5050/record/${meal._id}`) //A changer lors du déploiement server
      .then(() => {
        setMeals(meals.filter((m) => m._id !== meal._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <nav>
        <Navbar onSearch={setSearchInput} />
      </nav>
      <div className="container">
        <h1>Vos Plats</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La Réunion, sur Manzer.re.
        </p>
        <p>Ne manquez pas les menus du jour les plus alléchants.</p>
        <div className="card-container">
          {isLoading ? (
            <div className="loader-container">
              <Circles
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            </div>
          ) : (
            meals.map((meal, index) => (
              <Card key={index} meal={meal} onDelete={handleDelete} />
            ))
          )}
        </div>
        <Link
          to="/vos_plats/create"
          className="btn btn-primary rounded-circle add-button"
          style={{ position: "fixed", bottom: "30px", right: "30px" }}
        >
          <FaPlus style={{ width: "20px", height: "30px" }} />
        </Link>
      </div>
    </div>
  );
};

export default VosPlats;
