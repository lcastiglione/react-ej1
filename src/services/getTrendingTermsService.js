import { API_KEY, API_URL } from "./settings";

async function fromApiResponseToGifs(dataRaw) {
  const { data = [] } = dataRaw;
  return data;
}

export default async function getTrendingTerms({ keyword = "" } = {}) {
  const response = await fetch(
    `${API_URL}trending/searches?api_key=${API_KEY}`
  );
  const { data } = await response.json();
  return await fromApiResponseToGifs(data);
}
