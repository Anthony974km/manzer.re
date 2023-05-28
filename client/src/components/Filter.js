import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div className="footer">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">Tous les secteurs</option>
        <option value="Nord">Nord</option>
        <option value="Est">Est</option>
        <option value="Sud">Sud</option>
        <option value="Ouest">Ouest</option>
      </select>
    </div>
  );
};

export default Filter;
