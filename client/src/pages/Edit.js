import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Edit = () => {
  const [meal, setMeal] = useState({});
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [sector, setSector] = useState("");
  const params = useParams();
  console.log(params);
  

  useEffect(() => {
    axios.get(`http://localhost:5050/record/${params.id}`).then((response) => {
      setMeal(response.data);
      setTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setSector(response.data.sector);
    });
  }, [meal._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:5050/record/${params.id}`, {
        title,
        ingredients,
        sector,
      })
      .then(() => {
        window.location.href = "/vos_plats";
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Ingredients:
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
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
          //  checked={params.sector === "Est"}
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

      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default Edit;
