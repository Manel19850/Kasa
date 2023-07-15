import React, { useEffect, useState } from 'react';
import "./AppartementsPage.scss";
import AppartementCarousel from '../Composants/AppartementCarousel';
import Description from '../Composants/CollapseDescription';
import Equipement from '../Composants/CollapseEquipement';
import AppartementsInfos from '../Composants/AppartementsInfos';
import {useLocation} from "react-router-dom";
;

function AppartementsPage (){
const location = useLocation();
console.log ("location",location)

const [selectedFlat, setselectedFlat]= useState (null)
 

function fetchAppartementData(){
        fetch ("kasa.json")
        .then ((res) => res.json ())
        .then ((flats) => {
        const flat = flats.find ((flat) => flat.id === location.state.appartementId)
        setselectedFlat (flat);
        });
}
useEffect(fetchAppartementData,[]);

if (selectedFlat == null) return <div>... loading</div>

return (

<div>

        <div className='AppartementsPages'>
                <AppartementCarousel imageUrl={(selectedFlat.cover)} />
                <AppartementsInfos flat= {selectedFlat} /> 
        </div>

                <div className ='Ap-collapse'>
                        <Description content ={(selectedFlat.description)}/>
                        <Equipement content={selectedFlat.equipments.map(eq =><li>{eq}</li>)}/>
                </div>
        
       
</div>



)
}

export default AppartementsPage