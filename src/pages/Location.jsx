import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
// import Tag from "../components/Tag";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import locations from "../data/logements.json";
import "../styles/tag.scss";
import "../styles/location.scss";
import Stars from "../components/Stars";

const Location = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState();

  useEffect(() => {
    let locationFound = locations.find((location) => location.id === id);
    if (locationFound !== undefined) {
      console.log(locationFound);
      setLocation(locationFound);
    } else {
      navigate("/not-found");
    }
  }, []);

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <Fragment>
      <Header />
      <main id="location">
        <Slideshow pictures={location.pictures}/>
        <h2>{location.title}</h2>
        <div>{location.location} </div>
        <div>{location.host.name} </div>
        <Stars rating={location.rating} />
        <img className="host_img" alt="hote" src={location.host.picture}></img>
        <div className="tags">
          {location.tags.map((tag) => (
            <span className="tag" key={tag}>
              {" "}
              {tag}
            </span>
          ))}
        </div>
        <Collapse titre="Description" texte={location.description} />
        <Collapse titre="Equipements" texte={location.equipments.toString()} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Location;
