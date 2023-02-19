import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/Error";

const About = () => {
  return (
    <Fragment>
      <Header />
      <Error />
      <Footer />
    </Fragment>
  );
};

export default About;
