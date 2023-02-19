import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Fragment>
      <Header />
      <main>
        About
        <Link to="/">Accueil</Link>
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;
