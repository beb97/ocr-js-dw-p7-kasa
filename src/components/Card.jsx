import React, { useEffect } from "react";
import "../styles/card.scss";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  function HandleClick() {
    navigate(`/location/${props.card.id}`);
  }

  useEffect(() => {
    // console.log(props.card.id, " : ", props.card);
  });

  return (
    <article onClick={HandleClick}>
      <img alt="salon" className="card_img" src={props.card.cover}></img>
      <h3>{props.card.title}</h3>
    </article>
  );
};

export default Card;
