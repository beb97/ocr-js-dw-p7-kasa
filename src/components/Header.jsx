import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Kasa</Link>
      </h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
