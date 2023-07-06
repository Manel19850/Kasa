import React from 'react';
import "./Apropos";
import "./Apropos.css";

function Apropos (){
return (

<div className='page-apropos'>

<div className='banner-apropos'>
    <img src='https://picsum.photos/800/400' alt='Photo'></img> 
</div>

<div className='container-apropos'>
   
      <div className='fiabilite'>Fiabilité<i className="fa-solid fa-chevron-down"></i> </div> 
    
      <div className='respect'>Respect<i className="fa-solid fa-chevron-down"></i> </div> 
   
      <div className='service'>Service<i className="fa-solid fa-chevron-down"></i> </div> 
  
      <div className='securite'>Sécurité<i className="fa-solid fa-chevron-down"></i> </div> 
</div>


</div>


    );
    }

    export default Apropos;