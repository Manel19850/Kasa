import React from 'react';
import "./Appartement.css";
import { Link } from 'react-router-dom';

function Appartement() {
  return (
    <div className='appartement'>
      <Link to ="Appartements">
        <div className='appartement-title'>Titre de la Location</div>
      </Link>
    </div>
    
  );
}

export default Appartement;