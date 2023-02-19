import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([1, 2, 3]);
  }, []);

  if (!cards) {
    return <div>Nothing here ...</div>;
  }

  return (
    <div>
      {cards.map((card) => (
        <Card />
      ))}
      Cards
    </div>
  );
};

export default Cards;
