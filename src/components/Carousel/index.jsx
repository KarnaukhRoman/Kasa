import { useState } from "react"
import "./Carousel.scss";

function Carousel({pictures}) {
    console.log("Componet Carousel ",pictures);
    console.log(pictures.length);
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % pictures.length);
    }
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? pictures.length - 1 : prevSlide - 1);
    }
    console.log("Index current slide",pictures[currentSlide]);
    
    return (
        <section className="carousel">
            {pictures.length > 1 && <button className="left" onClick={prevSlide}><i class="fa-solid fa-chevron-left"></i></button>}
            <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            {pictures.length > 1 && <button className="right" onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>}
            {pictures.length > 1 && <p className="counter">{currentSlide + 1}/{pictures.length}</p>}
        </section>
    )

};

export default Carousel;