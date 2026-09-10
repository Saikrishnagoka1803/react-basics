import { CARD_IMAGE_URL, fixNoImage } from './utils/constants.js';
import { Link } from 'react-router-dom'

const RestoCard = ({ restaurantInfo }) => {
    return (
        <div className="w-2/12 m-4 p-4 border border-gray rounded-xl bg-gray-100">
            <img
                className="w-full h-auto rounded-xl"
                src={fixNoImage(restaurantInfo.cloudinaryImageId)}
                alt="Card image cap"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = CARD_IMAGE_URL;
                }}
            />
            <div className="mt-2">
                <h5 className="font-bold text-lg">{restaurantInfo.name}</h5>
                <p className="card-text">
                    {restaurantInfo.description}
                </p>
                <p className="card-text">
                    {restaurantInfo.cuisines.join(", ")}
                </p>
                <p className="card-text">
                    {restaurantInfo.totalRatingsString}
                </p>
                <p href="#" className="btn btn-primary">
                    {restaurantInfo.avgRating} stars,
                </p>
                <Link to={`/listRestaurantMenu/${restaurantInfo.id}`}>
                    <button className="bg-green-100 rounded-md p-2 mt-2 border border-gray" style={{ cursor: 'pointer' }}>
                        viewMenu
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RestoCard;