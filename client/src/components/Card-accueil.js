import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = ({ meal }) => {
  const ingredients = meal.ingredients.split(",");
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{meal.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">de {meal.user}</h6>
        <img src={meal.src} alt="" className="card-img-top img-fluid rounded-circle" />
        <div className="card-text">
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="card-subtitle">Secteur: {meal.sector}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
