import './ItemCardList.scss'
import { NavLink } from "react-router-dom";
import logementList from '../../database/logements.json'
import useFetch from '../../hooks/usefetch.jsx';

function ItemCardList(){
    //
    const { data } = useFetch("/src/database/logements.json");
    console.log("ListItems", data);
    
    //
    return (
        <div className="hebergements-cards">
            {data.map((card)=>(
                <article className="card" key={card.id}>
                    <NavLink to={`/logement/${card.id}`}>
                    <img src={card.cover} alt={card.title} />
                    <p>{card.title}</p>
                    </NavLink>
                </article>
            ))}
        </div>
    );
}
export default ItemCardList;