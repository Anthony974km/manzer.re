import React, { useState } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    user: "User", //Le login de la personne connecter
    ingredients: "",
    sector: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newDocument = { ...form };

    await fetch("http://localhost:5050/record", { //A changer lors du déploiement server
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDocument),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ title: "", user: "", ingredients: "", sector: "" });
    navigate("/vos_plats");
  }

  // This following section will display the form that takes the input from the user.
  const isFormInvalid = !form.title || !form.sector;

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
        <h3>Ajouter un repas</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Nom du plat</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={form.title}
              onChange={(e) => updateForm({ title: e.target.value })}
            />
            {!form.title && <small className="text-danger">Veuillez entrer le nom du plat</small>}
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Description</label>
            <input
              type="text"
              className="form-control"
              id="ingredients"
              value={form.ingredients}
              onChange={(e) => updateForm({ ingredients: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sectorOptions"
                id="sectorNord"
                value="Nord"
                checked={form.sector === "Nord"}
                onChange={(e) => updateForm({ sector: e.target.value })}
              />
              <label htmlFor="sectorNord" className="form-check-label">
                Nord
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sectorOptions"
                id="sectorEst"
                value="Est"
                checked={form.sector === "Est"}
                onChange={(e) => updateForm({ sector: e.target.value })}
              />
              <label htmlFor="sectorEst" className="form-check-label">
                Est
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sectorOptions"
                id="sectorSud"
                value="Sud"
                checked={form.sector === "Sud"}
                onChange={(e) => updateForm({ sector: e.target.value })}
              />
              <label htmlFor="sectorSud" className="form-check-label">
                Sud
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sectorOptions"
                id="sectorOuest"
                value="Ouest"
                checked={form.sector === "Ouest"}
                onChange={(e) => updateForm({ sector: e.target.value })}
              />
              <label htmlFor="sectorOuest" className="form-check-label">
                Ouest
              </label>
            </div>
          </div>
          {!form.sector && <small className="text-danger">Veuillez choisir le secteur</small>}
          <div className="form-group">
            <input type="submit" value="Ajouter" className="btn btn-primary" disabled={isFormInvalid} />
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
}
