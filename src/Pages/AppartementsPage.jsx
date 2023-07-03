import React from 'react';

function AppartementsPage (){

return(
<div className='AppartementsPages'>
        <div>
            <img src='https://picsum.photos/800/400' alt='Photo'></img> 
        </div>
                <div className='Ap-titre'>
                    <h1>Cozy loft on the Canal Saint Martin</h1>
                        <h2> Paris, îles de France</h2>
                            <p>Cozy</p>
                            <p>Canal</p>
                            <p>Paris 10</p>
                            
                </div>  
                <div className='Ap-host'>
                    <h3>Alexandre Dumas</h3>

                    <div className='logo-host'></div>

                    <div className='rate'>
                        <div className='rate-stars'>
                            <span> ☆</span>
                            <span> ☆</span>
                            <span> ☆</span>
                            <span> ☆</span>
                            <span> ☆</span> 
                        </div>                 
                    </div>
                </div>

                <div className='Ap-deroulante'>
                    <div className='description'>Description</div>
                    <div className='equipements'>Equipements</div>
                </div>

    </div>)
}

export default AppartementsPage