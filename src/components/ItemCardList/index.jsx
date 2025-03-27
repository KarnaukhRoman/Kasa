import { NavLink } from "react-router-dom";
import { useLogements } from "../../utils/LogementContext";

function ItemCardList(){
    //
    const { logements } = useLogements();
    if (!logements) return <span>Ooops, data is not exist</span>
    
    //
    return (
        <div className="hebergements-cards">
            {logements.map((card)=>(
                <article className="hebergements-cards__card" key={card.id}>
                    <NavLink to={`/logement/${card.id}`}>
                    <img src={card.cover} alt={card.title} className="hebergements-cards__image"/>
                    <p className="hebergements-cards__title">{card.title}</p>
                    </NavLink>
                </article>
            ))}
        </div>
    );
}
export default ItemCardList;