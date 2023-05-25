import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h5 className="card-title">{meal.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">de {meal.user}</h6>
      {/* <img src={meal.src} alt="" className="img-fluid rounded-circle" /> */}
      <p className="card-text">
        <ul>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        Secteur : {meal.sector}
      </p>
    </div>
  );
};

export default Card;
