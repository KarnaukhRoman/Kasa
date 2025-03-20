import './Logement.scss';
import { useParams } from "react-router-dom";
import listObjects from "../../database/logements.json";
// import { aboutList } from "../../database/about";
import Carousel from "../../components/Carousel";
import ComboBox from "../../components/ComboBox";
import Page404 from "../Page404";
import Rating from '../../components/Rating';
function Logement(){
    const { id } = useParams();
    const logement = listObjects.find((logement) => logement.id === id);
    console.log("Page logement",logement);

    if (!logement) return <Page404 />;
    
    return (
       <main>
            <Carousel pictures={logement.pictures} />
            <section className='info-logement'>
                <div className='first'>
                    <h2 className="title-logement">{logement.title}</h2>
                    <p className="location-logement">{logement.location}</p>
                    {logement.tags.map((tag)=><div className='tag-logement'>{tag}</div>)}
                </div>
                <div className='second'>
                    <div className='host-name'>
                        <p>{logement.host.name}</p>
                        <img className='host-img'src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <Rating rating={Number(logement.rating)}/>
                </div>
                </section>
                <div className='droplist-container'>
                    <ComboBox title='Description' content={logement.description}/>
                    <ComboBox title='Équipements' content={logement.equipments}/>
                </div>
            
       </main>
    );
}
export default Logement;