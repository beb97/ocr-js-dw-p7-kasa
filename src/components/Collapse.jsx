import React from "react";
import "../styles/collapse.scss";

const Collapse = (props) => {
  return (
    <details>
      <summary>
        <span>{props.titre}</span>
        <span>v</span>
        <span>^</span>
      </summary>
      <p>{props.texte}</p>
      {/* <summary>
        <span>WELCOME</span>
      </summary>
      <p>THIS IS MY SWAMP MY BRODA</p> */}
    </details>
  );
};

export default Collapse;
