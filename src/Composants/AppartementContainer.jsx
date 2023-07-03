import React from 'react';
import "./AppartementContainer.css";

function AppartementContainer (){
return (
<div className='ap-container'>
                <div className='Ap-titre'>
                    <h1>Cozy loft on the Canal Saint Martin</h1>
                        <h2> Paris, îles de France</h2>
                            <div className='ap-tag'>
                            <span>Cozy</span>
                            <span>Canal</span>
                            <span>Paris 10</span>
                            </div>
                </div>  
                <div className='Ap-host'>
                    <div className='host'>
                    <h3><span>Alexandre</span> 
                    <span>Dumas</span>
                    </h3>

                    <div className='logo-host'></div>
                    </div>
                    <div className='rate'>
                        <div >
                        <i class="fa-sharp fa-regular fa-star"></i>
                        <i class="fa-sharp fa-regular fa-star"></i>
                        <i class="fa-sharp fa-regular fa-star"></i>
                        <i class="fa-sharp fa-regular fa-star"></i>
                        <i class="fa-sharp fa-regular fa-star"></i>
                        
                        
                        </div>                 
                    </div>
                </div>
        </div>
    );
    }

    export default AppartementContainer;



