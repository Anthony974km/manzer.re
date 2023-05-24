import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Card = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Carry poulet</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">de user1234</h6>
          <img src="../pp2.png" alt="" />
          <p class="card-text">
            <ul>
              <li>Poulet</li>
              <li>Tomate</li>
              <li>Créole</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
