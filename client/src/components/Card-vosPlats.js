import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = ({ meal, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{meal.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">de {meal.user}</h6>
        <img src={meal.src} alt="" className="img-fluid rounded-circle" />
        <p className="card-text">
          <ul>
            <li>{meal.ingredients}</li>
          </ul>
          Secteur: {meal.sector}
        </p>
        <div className="btn-group" role="group">
          <Link to={`edit/${meal._id}`} className="btn btn-primary">
            Modifier
          </Link>
          <button onClick={() => onDelete(meal)} className="btn btn-danger">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

