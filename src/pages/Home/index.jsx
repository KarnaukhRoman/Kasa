import './Home.css'
import Banner from "../../components/Banner";
import ItemCardList from "../../components/ItemCardList/index.jsx";

function Home(){
    return (
    <main>
        <Banner 
        imageSrc="/src/assets/banner1.webp" 
        altText="Home Banner"
        bannerText="Chez vous, partout et ailleurs" 
        ></Banner>
        <section class="hebergements">
            <ItemCardList />
        </section>
    </main>
    );
}

export default Home;