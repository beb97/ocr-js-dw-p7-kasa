import React from "react";
import "../styles/collapse.scss";

const Collapse = (props) => {
  return (
    <details>
      <summary>
        <span>{props.titre}</span>
        <i className="las la-angle-double-down"></i>
        <i className="las la-angle-double-up"></i>
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
