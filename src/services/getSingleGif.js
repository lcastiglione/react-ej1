import { API_URL } from "./settings";

const fromApiResponseToGifs = (jsonResponse) => {
  const { data = [] } = jsonResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default async function getGifs({ id } = {}) {
  const response = await fetch(
    `${API_URL}/gifs/${id}?api_key=${process.env.REACT_APP_API_GIPHY_KEY}`
  );
  const jsonResponse = await response.json();
  return fromApiResponseToGifs(jsonResponse);
}
