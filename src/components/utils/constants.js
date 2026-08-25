export const CARD_IMAGE_URL = "https://picsum.photos/300/200";

const GET_RESTO_IMG = `https://media-assets.swiggy.com/swiggy/image/upload/`;

export const fixNoImage = (imgId) => {
  if (imgId === null) {
    return CARD_IMAGE_URL;
  }
  return GET_RESTO_IMG + imgId;
};
