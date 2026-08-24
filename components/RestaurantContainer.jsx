import RestoCard from './RestoCard.jsx'

const RestaurantContainer = () => (
    <div id="restaurant-container">
        <input type="search" placeholder="start searching ..."></input>
        <div id="resto-cards">
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
        </div>
    </div>
);

export default RestaurantContainer;