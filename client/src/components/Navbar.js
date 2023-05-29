import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Navbar = ({ onSearch }) => {
  let [searchInput, setSearchInput] = useState("");
  
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="blue">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img
            id="logoVD"
            src="../logo.png"
            width="80"
            height="80"
            alt="Logo"
          />
          Manzer.re
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/vos_plats">
                Vos plats
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              id="searchInput"
              placeholder="Rechercher..."
              onChange={handleSearchChange}
            />
            {/* <GoogleLogin
              clientId="85925874553-9kk3oadov97l29fne011vnbb2lcmfs96.apps.googleusercontent.com"
              buttonText="Connexion avec Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="btn btn-success"
            /> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;