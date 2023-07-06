import React from 'react';
import "./AppartementContainer";
import "./AppartementContainer.css";

function AppartementContainer (){
return (
<div>
  <div className='ap-container'>
    <div className='Ap-titre'>
      <h1>Cozy loft on the Canal Saint Martin</h1>
      <h2>Paris, îles de France</h2>
      <div className='ap-tag'>
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
    </div> 

    <div className='Ap-host'>
      <div className='host'>
        <h3>
          <span>Alexandre</span> 
          <span>Dumas</span>
        </h3>
        <div className='logo-host'></div>
      </div>

      <div className='rate'>
        <div>
          <i className="fa-sharp fa-regular fa-star"></i>
          <i className="fa-sharp fa-regular fa-star"></i>
          <i className="fa-sharp fa-regular fa-star"></i>
          <i className="fa-sharp fa-regular fa-star"></i>
          <i className="fa-sharp fa-regular fa-star"></i>
        </div>  
      </div>               
    </div>
  </div>
    
  <div className='Ap-deroulante'>
    <div className='description-container'>
      <div className='description'>Description<i className="fa-solid fa-chevron-down"></i> </div>
      <div className='description-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.
      </div> 
    </div> 
    
    <div className='equipement-container'>
      <div className='equipement'>Equipement <i className="fa-solid fa-chevron-down"></i> </div>
      <div className='equipement-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis reiciendis, 
        voluptatibus error optio minima provident distinctio. Asperiores nemo sunt eum. 
        Odio totam excepturi ea natus, delectus reprehenderit sit numquam.
      </div> 
    </div> 
  </div>
</div>

    );
    }

    export default AppartementContainer;