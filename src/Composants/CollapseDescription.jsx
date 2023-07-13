import { useState } from "react";
import "./CollapseDescription.css";

function Description(props){

  const [isContentvisible, setContenvisible]= useState (false);
  const showcontent = () => {setContenvisible (!isContentvisible);
  };

 
return (

<div>
  <div className='Ap-deroulante'>
    <div className='description-container'>
      <div className='description'>Description <span><i className= "fa-solid fa-chevron-down"onClick={showcontent}></i></span> </div>
    
      {isContentvisible && (
      <div className='description-content'> 
      {props.content}
      </div>
      )}
    
    </div> 
  </div>
</div>


    );
    }

    export default Description;