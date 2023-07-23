import React from "react";
import logementsDATA from "../kasa.json";
import { Link } from "react-router-dom";
import "./CardLogement.scss";

const CardLogement = () => {
  return (
    <div className="cardlogement">
      {logementsDATA.map((logement) => (
        <div key={logement.id}>
          <Link to={`/Appartements/${logement.id}`} className='appartement'> 
            <img src={logement.cover} alt={logement.title} />
            <div className='appartement-title'>{logement.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardLogement;

