export const CARD_IMAGE_URL = "https://picsum.photos/300/200";

const GET_RESTO_IMG = `https://media-assets.swiggy.com/swiggy/image/upload/`;

export const FETCH_ALL_RESTAURANTS_URL =
  "https://namastedev.com/api/v1/listRestaurants";

export const FETCH_EACH_RESTAURANT_URL =
  "https://namastedev.com/api/v1/listRestaurantMenu/";

export const fixNoImage = (imgId) => {
  if (imgId === null) {
    return CARD_IMAGE_URL;
  }
  return GET_RESTO_IMG + imgId;
};
