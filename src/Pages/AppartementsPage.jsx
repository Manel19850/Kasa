import React from 'react';
import "./AppartementsPage.css";
import AppartementDescription from '../Composants/Appartementdescription';
import AppartementBanner from '../Composants/AppartementBanner';
import AppartementContainer from '../Composants/AppartementContainer';

function AppartementsPage (){

return(
<div className='AppartementsPages'>
        <AppartementBanner/>

        <div className='ap-container'>
            <AppartementContainer/>
        </div>
        
                <div className='Ap-deroulante'>
                    <AppartementDescription/>
                    <AppartementDescription/>
                </div>
</div>)
}

export default AppartementsPage