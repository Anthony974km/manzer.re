import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Modal, Button } from 'react-bootstrap';

const Card = ({ meal, onDelete }) => {
  const ingredients = meal.ingredients.split(",");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleDelete = () => {
    onDelete(meal);
    handleClose();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{meal.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">de {meal.user}</h6>
        <img src={meal.src} alt="" className="img-fluid rounded-circle" />
        <p className="card-text">
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          Secteur: {meal.sector}
        </p>
        <div className="btn-group" role="group">
          <Link to={`edit/${meal._id}`} className="btn btn-primary">
            Modifier
          </Link>
          <button onClick={handleShow} className="btn btn-danger">
            Supprimer
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sûr de vouloir supprimer ce repas ?</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Card;
