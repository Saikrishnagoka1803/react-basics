import { useParams } from 'react-router-dom';
import useEachRestaurant from './utils/useEachRestaurant.js';

const RestoMenu = () => {
    const { RestoId } = useParams();

    const restaurantData = useEachRestaurant(RestoId);

    return (
        <div className="resto-menu-container">
            <div className="resto-data-container">
                <h1>{restaurantData?.name}</h1>
                <p>{restaurantData?.locality}</p>
                <p>{restaurantData?.areaName}</p>
                <p>{restaurantData?.cuisines?.join(", ")}</p>
                <p>{restaurantData?.avgRating}</p>
                <p>{restaurantData?.costForTwoMessage}</p>
                <p>{restaurantData?.totalRatingsString}</p>
            </div>
            <div className="resto-image-container">
                <img className="resto-image" src={restaurantData?.cloudinaryImageId ? `https://media-assets.swiggy.com/swiggy/image/upload/${restaurantData.cloudinaryImageId}` : "default-image-url"} alt="" />
            </div>
        </div>
    );
};

export default RestoMenu;