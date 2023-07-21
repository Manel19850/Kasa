import "./AppartementsPage.scss";
import AppartementCarousel from '../Composants/AppartementCarousel';
import Description from '../Composants/CollapseDescription';
import Equipement from '../Composants/CollapseEquipement';
import AppartementsInfos from '../Composants/AppartementsInfos';
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
              <div className="page-2"> 
<Footer /> </div>
</div>

)
}

export default AppartementsPage