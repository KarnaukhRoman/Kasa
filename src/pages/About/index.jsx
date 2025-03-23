import Banner from "../../components/Banner/index.jsx"
import ComboBox from "../../components/ComboBox/index.jsx";
import useFetch from "../../hooks/usefetch.jsx";

function Propos(){
    const { data } = useFetch('/src/database/about.json');
    console.log("From About", data);
    
    return (
        <main>
            <Banner 
                imageSrc="/src/assets/banner2.webp" 
                altText="Propos Banner"
            />
            {data.map((about, index)=>
                <div className='container-combobox' key={index}>
                    <ComboBox title={about.title} content={about.content} />
                </div>)}
        </main>
    );
}
export default Propos; 