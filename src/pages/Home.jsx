import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/home.scss";
import Cards from "../components/Cards";

function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <Banner />
        <Cards />
        <Link to="/404">404</Link>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
