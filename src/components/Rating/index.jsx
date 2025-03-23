function Rating({rating, maxRating=5}){
    const starStyle = (index) => ({
        color: index < rating ? "#FF6060" : "#E3E3E3",
        marginRight: "5px",
    });
    return (
        <div className="rating">
            {Array.from({length: maxRating}, (_, index) => (
                <i 
                    key={index}
                    style={starStyle(index)}
                    className="fa-solid fa-star"
                ></i>
            ))}
        </div>
    );
};

export default Rating;