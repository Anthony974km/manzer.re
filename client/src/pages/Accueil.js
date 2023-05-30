import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card-accueil";
import Filter from "../components/Filter";
import Loader, { Circles } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Accueil = () => {
  let [meals, setMeals] = useState([]);
  let [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = () => {
    setIsLoading(true);
    axios.get("http://localhost:5050/record/").then((response) => { //A changer lors du déploiement server
      setMeals(response.data);
      setIsLoading(false);
    });
  };

  useEffect(fetchMeals, []);

  let filteredMeals =
    filter === "All" ? meals : meals.filter((meal) => meal.sector === filter);

  filteredMeals = filteredMeals.filter(
    (meal) =>
      meal.title.toLowerCase().includes(search.toLowerCase()) ||
      meal.ingredients.toLowerCase().includes(search.toLowerCase()) ||
      meal.user.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div className="app">
      <nav>
        <Navbar onSearch={handleSearchChange} />
      </nav>
      <div className="container">
        <h1>Menu du jour</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La
          Réunion, sur Manzer.re.
        </p>
        <p>Ne manquez pas les menus du jour les plus alléchants.</p>
        <div className="filter-container">
          <Filter onFilterChange={setFilter} />
        </div>
        <div className="card-container">
          {isLoading ? (
            <Circles
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            filteredMeals.map((meal, index) => <Card key={index} meal={meal} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
