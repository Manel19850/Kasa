import React, {useEffect,useState} from 'react'
import "./CardLogement.css";
import Appartement from "./Appartement"


function CardLogement() {
   const [appartements, setappartements]= useState ([]);
   useEffect  (fetchAppartements,[]);
   function fetchAppartements (){
   fetch("kasa.json")
   .then ((res)=> res.json())
   .then ((res)=> setappartements(res))
   .catch (console.error);
  }

  return (
    <div className='cardlogement'>
    {appartements.map((appartement) => (
       <div>
         <Appartement title= {appartement.title} image={appartement.cover}/>
      
      </div>
    ))}
   
 </div>

  
  )
}

export default CardLogement

