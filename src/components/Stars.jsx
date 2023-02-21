import React from "react";

const Stars = (props) => {
  return (
    <div>
      {(() => {
        const arr = [];
        for (let i = 0; i < props.rating; i++) {
          arr.push(<i className="las la-star" key={i}></i>);
        }
        for (let i = 5; i > props.rating; i--) {
          arr.push(<i className="lar la-star" key={i}></i>);
        }
        return arr;
      })()}
    </div>
  );
};

export default Stars;
