import { useState } from 'react';
import RestoCard from './RestoCard.jsx'
import useOnlineStatus from './utils/useOnlineStatus.js';
import useListRestaurants from './utils/useListRestaurants.js';

const RestaurantContainer = () => {

    const [searchText, setSearchText] = useState("")
    const [showTopRated, setShowTopRated] = useState(false)

    const isOnline = useOnlineStatus();
    const allRestaurants = useListRestaurants();

    const filteredRestaurants = allRestaurants.filter((Restaurant) => {
        const name = Restaurant?.info?.name.toLowerCase();
        const cuisines = Restaurant?.info?.cuisines.join(", ").toLowerCase();
        const matchSearch = name.includes(searchText.toLowerCase()) || cuisines.includes(searchText.toLowerCase());
        const matchRating = showTopRated ? Restaurant?.info?.avgRating > 4.5 : true;
        return matchSearch && matchRating;
    });

    if (!isOnline) {
        return <h1>🔴 You are offline. Please check your internet connection.</h1>
    }

    return (
        <div id="gap-4 p-4 m-4">

            <div className="flex gap-4 p-4 m-4 ">
                <input
                    className="border border-gray rounded-xl p-2 w-6/12"
                    type="search"
                    placeholder="start searching ..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button id='search-button' className="bg-green-100 rounded-xl p-2 w-2/12" onClick={() => {
                    setShowTopRated(!showTopRated)
                }}> {showTopRated ? "Show All Restaurants" : "Show Top Rated"} </button>
            </div>

            <div id="flex" className="flex flex-wrap gap-4">
                {
                    filteredRestaurants.length === 0 ? (
                        <p>No restaurants found matching your search.</p>
                    ) : (
                        filteredRestaurants.map((each, index) => {
                            return <RestoCard key={each.info.id} restaurantInfo={each.info} />
                        })
                    )
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;