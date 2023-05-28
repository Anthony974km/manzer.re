import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card-accueil";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Accueil = () => {
  let [meals, setMeals] = useState([]);
  let [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const fetchMeals = () => {
    axios
      .get("http://localhost:5050/record/")
      .then((response) => setMeals(response.data));
  };

  useEffect(fetchMeals, []);

  let filteredMeals = filter === "All" ? meals : meals.filter(meal => meal.sector === filter);

  // Then filter by search input
  filteredMeals = filteredMeals.filter(meal =>
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
        <div className="card-container">
          {filteredMeals.map((meal, index) => (
            <Card key={index} meal={meal} />
          ))}
        </div>
      </div>
      <div>
        <footer>
          <Footer onFilterChange={setFilter} />
        </footer>
      </div>
    </div>
  );
};

export default Accueil;