import Banner from "../../components/Banner/index.jsx"
import aboutList from "../../database/about.json";
import ComboBox from "../../components/ComboBox/index.jsx";
import './About.scss';
import useFetch from "../../hooks/usefetch.jsx";

function Propos(){
    // const aboutList = about;
    const { data } = useFetch('/src/database/about.json');
    return (
        <main>
            <Banner 
                imageSrc="/src/assets/banner2.webp" 
                altText="Propos Banner"
            />
            {data.map((about)=>
                <div className='container-combobox' key={about.id}>
                    <ComboBox title={about.title} content={about.content} />
                </div>)}
        </main>
    );
}
export default Propos; 