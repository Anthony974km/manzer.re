import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="blue">
      <div className="container-fluid">

        <a className="navbar-brand" href="/*"><img id="logoVD" src='../logo.png' />Manzer.re</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/*">Accueil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catégorie
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Jeux Vidéo</a></li>
                <li><a className="dropdown-item" href="#">Console</a></li>
                <li><a className="dropdown-item" href="#">Cartes Cadeaux</a></li>
                <li><a className="dropdown-item" href="#">Abonnements</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Promotions</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">À propos</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search"></input>
            <button className="btn btn-outline-light" type="submit">Recherche</button>
          </form>
          <a className="navbar-brand" href="+#"><img id ="caddie" src='../logo_caddie.png' /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;