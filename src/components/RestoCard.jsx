import { CARD_IMAGE_URL, fixNoImage } from './utils/constants.js'

const RestoCard = ({ restaurantInfo }) => {
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={fixNoImage(restaurantInfo.cloudinaryImageId)}
                alt="Card image cap"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = CARD_IMAGE_URL;
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{restaurantInfo.name}</h5>
                <p className="card-text">
                    {restaurantInfo.description}
                </p>
                <p className="card-text">
                    {restaurantInfo.cuisines.join(", ")}
                </p>
                <p className="card-text">
                    {restaurantInfo.totalRatingsString}
                </p>
                <a href="#" className="btn btn-primary">
                    {restaurantInfo.avgRating} stars,
                </a>
            </div>
        </div>
    );
};

export default RestoCard;