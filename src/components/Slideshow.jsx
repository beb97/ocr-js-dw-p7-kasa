import React, { useState } from "react";
import "../styles/slideshow.scss";

// CARROUSEL
const Slideshow = (props) => {
  const [number, setNumber] = useState(0);

  function changeSlide(direction) {
    let nextSlide = number + direction;

    // Gestion des extremes 0 et array.length
    let totalSlide = props.pictures.length;
    if (nextSlide >= totalSlide) {
      nextSlide = 0;
    } else if (nextSlide < 0) {
      nextSlide = totalSlide - 1; // 6th slide at index 5
    }

    // console.log("direction: ", direction, nextSlide, totalSlide);
    setNumber(nextSlide);
  }

  function HandleLeft() {
    changeSlide(-1);
  }

  function HandleRight() {
    changeSlide(1);
  }

  return (
    <div id="slideshow">
      <i className="las la-caret-left" onClick={HandleLeft}></i>
      <img
        className="location_img"
        alt="salon"
        src={props.pictures[number]}
      ></img>
      <i className="las la-caret-right" onClick={HandleRight}></i>
    </div>
  );
};

export default Slideshow;
