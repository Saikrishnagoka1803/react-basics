import { useEffect, useState } from 'react';
import RestoCard from './RestoCard.jsx'
import { FETCH_ALL_RESTAURANTS_URL} from './utils/constants.js'

const RestaurantContainer = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showTopRated, setShowTopRated] = useState(false)

    const fetchData = async () => {
        try {
            const resp = await fetch(`https://corsproxy.io/?key=292c3d35&url=${encodeURIComponent(FETCH_ALL_RESTAURANTS_URL)}`)
            if (!resp.ok) {
                throw new Error(`HTTP error: ${resp.status}`);
            }
            const json = await resp.json();
            const restaurants = json?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setAllRestaurants(restaurants);
        }
        catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filteredRestaurants = allRestaurants.filter((Restaurant) => {
        const name = Restaurant?.info?.name.toLowerCase();
        const cuisines = Restaurant?.info?.cuisines.join(", ").toLowerCase();
        const matchSearch = name.includes(searchText.toLowerCase()) || cuisines.includes(searchText.toLowerCase());
        const matchRating = showTopRated ? Restaurant?.info?.avgRating > 4.5 : true;
        return matchSearch && matchRating;
    });

    return (
        <div id="restaurant-container">

            <input
                type="search"
                placeholder="start searching ..."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <button id='search-button' onClick={() => {
                setShowTopRated(!showTopRated)
            }}> {showTopRated ? "Show All Restaurants" : "Show Top Rated"} </button>
            <div id="resto-cards">
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