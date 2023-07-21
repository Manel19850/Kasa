import "./AppartementsPage.scss";
import AppartementCarousel from '../Composants/Carrousel/AppartementCarousel';
import Description from '../Composants/Appartements info/CollapseDescription';
import Equipement from '../Composants/Appartements info/CollapseEquipement';
import AppartementsInfos from '../Composants/Appartements info/AppartementsInfos';
import {useParams} from "react-router-dom";
import logementsDATA from "../Composants/kasa.json";
import Footer from '../Structure de Page/Footer';
import Navbar from '../Structure de Page/Navbar';



function AppartementsPage (){
        const { id } = useParams();
        console.log(id)
        const logement = logementsDATA.find((logement) => logement.id === id);
        console.log(logementsDATA)
return (

<div>
<Navbar />
        <div className='AppartementsPages'>
                <AppartementCarousel pictures={logement.pictures} />
                <AppartementsInfos flat= {logement} /> 
        </div>

                <div className ='Ap-collapse'>
                        <Description content ={(logement.description)}/>
                        <Equipement content={logement.equipments.map(eq =><li>{eq}</li>)}/>
                </div>
        
<Footer />     
</div>



)
}

export default AppartementsPage