import './ItemCardList.scss'
import ItemCard from "../ItemCard";
import {logementList} from '../../database/logements.js'
function ItemCardList(){
    return (
        <div class="hebergements-cards">
            {logementList.map((logement)=>(
                <ItemCard{...logement}  />
            ))}
        </div>
    );
}
export default ItemCardList;