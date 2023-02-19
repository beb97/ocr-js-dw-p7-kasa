import React from "react";
import "../styles/card.scss";
import homePic from "../assets/home.png";

const Card = () => {
  return (
    <article>
      <img alt="img" src={homePic}></img>
      <h3>Titre</h3>
    </article>
  );
};

export default Card;
