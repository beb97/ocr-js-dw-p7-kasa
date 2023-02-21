import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import abouts from "../data/abouts.json";

const About = () => {
  return (
    <Fragment>
      <Header />
      <main>
        {abouts.map((about) => (
          <Collapse titre={about.title} key={about.id} texte={about.content} />
        ))}
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;
