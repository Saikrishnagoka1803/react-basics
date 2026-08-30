import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FETCH_EACH_RESTAURANT_URL } from './utils/constants.js';

const RestoMenu = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const { RestoId } = useParams();
    const getEachRestaurantData = async (RestoId) => {
        try {
            const resp = await fetch(`https://corsproxy.io/?key=292c3d35&url=${encodeURIComponent(FETCH_EACH_RESTAURANT_URL + RestoId)}`)
            if (!resp.ok) {
                throw new Error(`HTTP error: ${resp.status}`);
            }
            const json = await resp.json();
            setRestaurantData(json.data.cards[2].card.card.info);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getEachRestaurantData(RestoId);
    }, []);

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