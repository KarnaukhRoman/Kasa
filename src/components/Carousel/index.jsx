import { useState } from "react"

function Carousel({pictures}) {   
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % pictures.length);
    }
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? pictures.length - 1 : prevSlide - 1);
    }
    
    return (
        <section className="carousel">
            {pictures.length > 1 && (
                <button className="carousel__button carousel__button--left" onClick={prevSlide}>
                    <i className="carousel__button-icon fa-solid fa-chevron-left"></i>
                </button>)}
            <img className="carousel__image" src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            {pictures.length > 1 && (
                <button className="carousel__button carousel__button--right" onClick={nextSlide}>
                    <i className="carousel__button-icon fa-solid fa-chevron-right"></i>
                </button>)}
            {pictures.length > 1 && <p className="carousel__counter">{currentSlide + 1}/{pictures.length}</p>}
        </section>
    )

};

export default Carousel;