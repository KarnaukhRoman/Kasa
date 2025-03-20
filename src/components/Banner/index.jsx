import './Banner.scss'
function Banner({imageSrc, altText, bannerText}){
    return (
        <div className="kasa-banner">
            {/* <figure> */}
                <img src={imageSrc} alt={altText} />
                <p className='banner-text'>{bannerText}</p>
            {/* </figure> */}
        </div>
    );
}

export default Banner;