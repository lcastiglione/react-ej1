import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (response) => {
  const { data = [] } = response;
  return data;
};

export default function getTrendingTerms({ keyword = "" } = {}) {
  return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then(fromApiResponseToGifs);
}
