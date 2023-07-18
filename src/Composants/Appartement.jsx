import React from 'react';
import "./Appartement.scss";
import {Link} from 'react-router-dom';

function Appartement(props) {
  return (
    <div>
    <Link to="/Appartements" state={{appartementId: props.id}}>
      <div className='appartement'> 
        <img src= {props.imageUrl} alt=''/>
        <div className='appartement-title'>{props.title}</div>
      </div>
    </Link>
    </div>
  );
}
export default Appartement;