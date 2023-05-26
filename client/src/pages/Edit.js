import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Edit = ({ _id }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [sector, setSector] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(`http://localhost:5050/record/${_id}`);
      setTitle(res.data.title);
      setIngredients(res.data.ingredients);
      setSector(res.data.sector);
    };
    fetchMeal();
  }, [_id]);

  const updateMeal = async () => {
    const updatedMeal = { title, ingredients, sector };
    await axios.put(`http://localhost:5050/record/${_id}`, updatedMeal);
  };

  return (
    <div>
      <h2>Modifier le repas</h2>
      <form onSubmit={updateMeal}>
        <label>
          Titre :
          <input 
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Ingrédients :
          <input 
            type="text"
            value={ingredients}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Secteur :
          <input 
            type="text"
            value={sector}
            onChange={e => setSector(e.target.value)}
          />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default Edit;
