import React from "react";
import "../styles/banner.scss";
import Image from "../assets/banner.png";

const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Image})`
  },
};

const Banner = () => {
  return (
    <div
      id="banner"
      style={styles.container}
    >
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
