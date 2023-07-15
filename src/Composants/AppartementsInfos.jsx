import React from 'react';
import "./AppartementsInfos.scss";


function Appartementsinfos (props){
  const name = props.flat.host.name;
  const [firstName, lastName] = name.split (" ");

    return (

        <div className='ap-container'>
<div className='Ap-titre'>
      <h1>{props.flat.title}</h1>
      <h2>{props.flat.location}</h2>
      <div className='ap-tag'>
      {props.flat.tags.map((tag) => (
    <span key={tag}>{tag}</span>
      ))}
      </div>
    </div> 
    <div className='Ap-host'>
    <div className='host'>
      <h3>
        <span>{firstName}</span> 
        <span>{lastName}</span>
      </h3>
        <div className='logo-host'>
            <img src={props.flat.host.picture} alt=""/> 
        </div>
    </div>

    <div className='rate'>
        {[1,2,3,4,5].map ((num) =><span key={num} className={props.flat.rating > num ?"on":""}>★</span>)}
    </div>               
  </div>
  </div>
    )}



export default Appartementsinfos;