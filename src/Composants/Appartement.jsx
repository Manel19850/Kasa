import React from 'react';
import "./Appartement.scss";
import {Link} from 'react-router-dom';

function Appartement(props) {
  return (
    <Link to= "/Appartements" 
    state={{appartementId:props.id}}>
    <div className='appartement'> 
    <div className='appartement-title'>{props.title}</div>
    </div>
      </Link>
   
    
  );
}

export default Appartement;