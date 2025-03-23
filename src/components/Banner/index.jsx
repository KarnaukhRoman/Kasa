function Banner({imageSrc, altText, bannerText}){
    return (
        <div className="banner">
                <img className='banner__image' src={imageSrc} alt={altText} />
                <p className='banner__text'>{bannerText}</p>
        </div>
    );
}

export default Banner;