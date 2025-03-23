import { NavLink } from "react-router-dom";
import useFetch from '../../hooks/usefetch.jsx';

function ItemCardList(){
    //
    const { data } = useFetch("/src/database/logements.json");
    console.log("ListItems", data);
    
    //
    return (
        <div className="hebergements-cards">
            {data.map((card)=>(
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