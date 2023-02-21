import React, { useState, useEffect } from "react";
import "../styles/cards.scss";
import Card from "./Card";
import locations from "../data/logements.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // console.log(locations);
    setCards(locations);
  }, []);

  if (!cards) {
    return <div>Nothing here ...</div>;
  }

  return (
    <section>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};

export default Cards;
