import { useState } from "react";
import "./CollapseEquipement";
import "./CollapseEquipement.css";

function Equipement(props){

  

    const [isContentvisible, setContenvisible]= useState (false);
    const showcontent = () => {setContenvisible (!isContentvisible);
    };
  
 
return (

<div>
  <div className='Ap-deroulante'>

    <div className='equipement-container'>
      <div className='equipement'>Equipement <span> <i className="fa-solid fa-chevron-down"onClick={showcontent}></i></span> </div>
      {isContentvisible && (
      <div className='equipement-content'>
        
        {props.content}
      
      </div> 
      )}
    </div> 
  </div>
</div>


    );
    }

    export default Equipement;