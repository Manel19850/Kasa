import React from 'react';
import "./Appartement.scss";
import { Link } from 'react-router-dom';

function Appartement(props) {
  return (
    <div className='appartement'>
      <Link to ="Appartements">
        <img src={props.image} alt=''></img>
        <div className='appartement-title'>{props.title}</div>
      </Link>
    </div>
    
  );
}

export default Appartement;