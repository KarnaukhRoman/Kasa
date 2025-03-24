import { useParams } from "react-router-dom";
import listObjects from "../../database/logements.json";
import Carousel from "../../components/Carousel";
import ComboBox from "../../components/ComboBox";
import Page404 from "../Page404";
import Rating from '../../components/Rating';

function Logement(){
    const { id } = useParams();
    const logement = listObjects.find((logement) => logement.id === id);

    if (!logement) return <Page404 />;
    
    return (
        <main>
        <Carousel pictures={logement.pictures} />
        <section className="info-logement">
            <div className="info-logement__first">
                <h2 className="info-logement__title">{logement.title}</h2>
                <p className="info-logement__location">{logement.location}</p>
                <div className="info-logement__tags">
                    {logement.tags.map((tag, index) => (
                        <div className="info-logement__tag" key={tag + index}>{tag}</div>
                    ))}
                </div>
            </div>
            <div className="info-logement__second">
                <div className="info-logement__host">
                    <p className="info-logement__host-name">{logement.host.name}</p>
                    <img className="info-logement__host-img" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <Rating rating={Number(logement.rating)} />
            </div>
        </section>
        <div className="droplist-container">
            <ComboBox title="Description" content={logement.description} />
            <ComboBox title="Équipements" content={logement.equipments} />
        </div>
    </main>
    );
}
export default Logement;