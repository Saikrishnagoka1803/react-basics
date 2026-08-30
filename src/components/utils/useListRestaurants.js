import { useState, useEffect } from "react";
import { FETCH_ALL_RESTAURANTS_URL } from "./constants.js";

const useListRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        `https://corsproxy.io/?key=292c3d35&url=${encodeURIComponent(FETCH_ALL_RESTAURANTS_URL)}`,
      );
      if (!resp.ok) {
        throw new Error(`HTTP error: ${resp.status}`);
      }
      const json = await resp.json();
      setAllRestaurants(
        json.data.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants,
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return allRestaurants;
};

export default useListRestaurants;
