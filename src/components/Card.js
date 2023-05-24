import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Carry poulet</h5>
          <h6 className="card-subtitle mb-2 text-muted">de user1234</h6>
          <img src="../pp2.png" alt="" className="img-fluid rounded-circle" />
          <p className="card-text">
            <ul>
              <li>Poulet</li>
              <li>Tomate</li>
              <li>Créole</li>
            </ul>
            Secteur : Nord
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
