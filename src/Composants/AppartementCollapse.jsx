import { useState } from "react";
import "./AppartementCollapse";
import "./AppartementCollapse.css";

function AppartementContainer (){
return (


<div>
  <div className='Ap-deroulante'>
    <div className='description-container'>
      <div className='description'>Description <span><i className= "fa-solid fa-chevron-down"></i></span> </div>
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
      <div className='equipement'>Equipement <span> <i className="fa-solid fa-chevron-down"></i></span> </div>
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