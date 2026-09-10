import { useParams } from 'react-router-dom';
import useEachRestaurant from './utils/useEachRestaurant.js';
import RestoMenuAccordian from './RestoMenuAccordian.jsx';
import { useState } from 'react';

const RestoMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const { RestoId } = useParams();

    const { restaurantData } = useEachRestaurant(RestoId);
    const reqRestaurantData = restaurantData[2]?.card?.card?.info;
    const addRestoData = restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const setIsMenuOpenHandler = (menuId) => {
        setIsMenuOpen((currentId) => currentId === menuId ? null : menuId);
    }

    return (
        <div>
            <div className="flex flex-wrap mt-16 mb-4">
                <div className="text-center mb-4 w-6/12">
                    <h1 className="text-2xl font-bold">{reqRestaurantData?.name}</h1>
                    <p className="text-lg">{reqRestaurantData?.locality}</p>
                    <p className="text-md">{reqRestaurantData?.areaName}</p>
                    <p className="text-sm">{reqRestaurantData?.cuisines?.join(", ")}</p>
                    <p className="text-xl font-bold">${reqRestaurantData?.avgRating}</p>
                    <p className="text-md">{reqRestaurantData?.costForTwoMessage}</p>
                    <p className="text-sm">{reqRestaurantData?.totalRatingsString}</p>
                </div>
                <div className="w-6/12">
                    <img className="w-45 h-45 object-cover" src={reqRestaurantData?.cloudinaryImageId ? `https://media-assets.swiggy.com/swiggy/image/upload/${reqRestaurantData.cloudinaryImageId}` : "default-image-url"} alt="" />
                </div>

            </div>
            {addRestoData?.map((item) => (
                <RestoMenuAccordian key={item.card.info.id} menuData={item.card.info} isMenuOpen={isMenuOpen === item.card.info.id} setIsMenuOpenHandler={setIsMenuOpenHandler} />
            ))}
        </div>
    );
};

export default RestoMenu;