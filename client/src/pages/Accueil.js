import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Accueil = () => {
  const meals = [
    { title: "Carry poulet", user: "user1234", src: "../pp1.png", sector: "Nord", ingredients: ["Poulet", "Tomate", "Créole"] },
    { title: "Sauté de mines ", user: "user987", src: "../pp2.png", sector: "Nord", ingredients: ["Mines", "Nouilles", "Chinois"] },
    { title: "Rougail saucisse", user: "user1234", src: "../pp1.png", sector: "Nord", ingredients: ["Saucisse", "Porc", "Créole"] },
    { title: "Carry poisson", user: "utilisateur12", src: "../pp3.png", sector: "Sud", ingredients: ["Poisson", "Grains", "Créole"] },
    { title: "Cassoulet", user: "utilisatrice45", src: "../pp4.png", sector: "Ouest", ingredients: ["Grains", "Saucisse", "Français"] },
    { title: "Carry poulet", user: "utilisatrice45", src: "../pp4.png", sector: "Ouest", ingredients: ["Poulet", "Tomate", "Créole"] },

  ]

  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <div className="container">
        <h1>Menu du jour</h1>
        <p>
          Laissez-vous tenter par les menus du jour les plus délicieux de La
          Réunion, sur Manzer.re.
        </p>
        <p>Ne manquez pas les menus du jour les plus alléchants.</p>
        <div className="card-container">
          {meals.map((meal, index) => (
            <Card key={index} meal={meal} />
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Accueil;
