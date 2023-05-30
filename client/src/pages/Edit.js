import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

const Edit = () => {
  const [meal, setMeal] = useState({});
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [sector, setSector] = useState("");
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5050/record/${params.id}`).then((response) => { //A changer lors du déploiement server
      setMeal(response.data);
      setTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setSector(response.data.sector);
    });
  }, [meal._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:5050/record/${params.id}`, { //A changer lors du déploiement server
        title,
        ingredients,
        sector,
      })
      .then(() => {
        window.location.href = "/vos_plats";
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <h3>Modifier un repas</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Nom du plat</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Description</label>
            <input
              type="text"
              className="form-control"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Nord"
              //  checked={params.sector === "Nord"}
              onChange={(e) => setSector(e.target.value)}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Nord
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Est"
              //   checked={params.sector === "Est"}
              onChange={(e) => setSector(e.target.value)}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Est
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Sud"
              //  checked={params.sector === "Sud"}
              onChange={(e) => setSector(e.target.value)}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Sud
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Ouest"
              //  checked={params.sector === "Ouest"}
              onChange={(e) => setSector(e.target.value)}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Ouest
            </label>
          </div>

          <div className="form-group">
            <input type="submit" value="Mise à jour" className="btn btn-primary" />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/vos_plats")}
              style={{ marginLeft: "10px" }}
            >
              Retour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
