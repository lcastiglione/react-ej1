﻿// Parámetros para la consulta a la API de gifs
const body = {
  api_key: process.env.REACT_APP_API_GIPHY_KEY,
  q: "", // Palabra a buscar
  limit: "15", //Cantidad de respuestas a devolver
  offset: "0",
  rating: "g", // Calificación de edad
  lang: "en", //Idioma
};

//Convierte un objeto json del tipo clave-valor en un string de parámtros para una request get
function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
    );
  }
  return keyValuePairs.join("&");
}

const fromApiResponseToGifs = (response) => {
  const { data = [] } = response;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({ keyword = "" } = {}) {
  body["q"] = keyword ? keyword : body["q"];
  return fetch(
    `${process.env.REACT_APP_API_GIPHY_URL}?${objToQueryString(body)}`
  )
    .then((response) => response.json())
    .then(fromApiResponseToGifs);
}
