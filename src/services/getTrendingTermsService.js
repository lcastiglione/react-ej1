import { API_URL } from "./settings";

const fromApiResponseToGifs = (response) => {
  const { data = [] } = response;
  return data;
};

export default function getTrendingTerms({ keyword = "" } = {}) {
  return fetch(
    `${API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_GIPHY_KEY}`
  )
    .then((response) => response.json())
    .then(fromApiResponseToGifs);
}
