import { useState, useEffect } from "react";
import { FETCH_EACH_RESTAURANT_URL } from "./constants.js";

const useEachRestaurant = (RestoId) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const getEachRestaurantData = async (RestoId) => {
    try {
      const resp = await fetch(
        `https://corsproxy.io/?key=292c3d35&url=${encodeURIComponent(FETCH_EACH_RESTAURANT_URL + RestoId)}`,
      );
      if (!resp.ok) {
        throw new Error(`HTTP error: ${resp.status}`);
      }
      const json = await resp.json();
      setRestaurantData(json.data.cards[2].card.card.info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getEachRestaurantData(RestoId);
  }, []);

  return restaurantData;
};

export default useEachRestaurant;
