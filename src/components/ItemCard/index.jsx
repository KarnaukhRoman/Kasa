import './ItemCard.css'
function ItemCard({id, title, cover}){
    return (
        <article key={id} className="card">
            <img src={cover} alt={title} />
            <p>{title}</p>
        </article>
    );
}
export default ItemCard;