import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = ({ meal, onDelete }) => {
  return (
    <div className="card">
      <h5 className="card-title">{meal.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">de {meal.user}</h6>
      <img src={meal.src} alt="" className="img-fluid rounded-circle" />
      <p className="card-text">
        <ul>
          
          <li>{meal.ingredients}</li>
          
        </ul>
        Secteur : {meal.sector}
      </p>
      <button onClick={() => onDelete(meal)}>Supprimer</button>
      <Link to={`edit/${meal._id}`}>Modifier</Link> 
    </div>
  );
};

export default Card;