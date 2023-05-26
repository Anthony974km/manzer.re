import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   title: "",
   ingredients: "",
   sector: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id;
     const response = await fetch(`http://localhost:5050/record/${id}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     title: form.title,
     ingredients: form.ingredients,
     sector: form.sector,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5050/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Modifier le repas</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="title">Nom du repas: </label>
         <input
           type="text"
           className="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">ingredients: </label>
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
             title="positionOptions"
             id="positionNord"
             value="Nord"
             checked={form.sector === "Nord"}
             onChange={(e) => updateForm({ sector: e.target.value })}
           />
           <label htmlFor="positionNord" className="form-check-label">Nord</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             title="positionOptions"
             id="positionEst"
             value="Est"
             checked={form.sector === "Est"}
             onChange={(e) => updateForm({ sector: e.target.value })}
           />
           <label htmlFor="positionEst" className="form-check-label">Est</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             title="positionOptions"
             id="positionSud"
             value="Sud"
             checked={form.sector === "Sud"}
             onChange={(e) => updateForm({ sector: e.target.value })}
           />
           <label htmlFor="positionSud" className="form-check-label">Sud</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             title="positionOptions"
             id="positionOuest"
             value="Ouest"
             checked={form.sector === "Ouest"}
             onChange={(e) => updateForm({ sector: e.target.value })}
           />
           <label htmlFor="positionOuest" className="form-check-label">Ouest</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}