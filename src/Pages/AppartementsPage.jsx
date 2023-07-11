import React from 'react';
import "./AppartementsPage.css";
import AppartementCarousel from '../Composants/AppartementCarousel';
import AppartementContainer from '../Composants/AppartementCollapse';
import AppartementsInfos from '../Composants/AppartementsInfos';

;

function AppartementsPage (){

return(
<div className='AppartementsPages'>
         <AppartementCarousel/>
        <AppartementsInfos/> 
        <AppartementContainer/>    
</div>

       




)
}

export default AppartementsPage