// Parámetros para la consulta a la API de gifs
const body = {
  api_key: process.env.REACT_APP_API_GIPHY_KEY,
  q: "", // Palabra a buscar
  limit: "25", //Cantidad de respuestas a devolver
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

export default async function getGifs({ keyword = "" } = {}) {
  body["q"] = keyword ? keyword : body["q"];
  const response = await fetch(
    `${process.env.REACT_APP_API_GIPHY_URL}?${objToQueryString(body)}`
  );

  const { data } = await response.json();
  return data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });
}
