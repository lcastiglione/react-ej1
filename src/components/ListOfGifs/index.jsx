import React, { useState, useEffect } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";
import "./listOfGifs.css";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(() => {
    // Se hace de esta forma para poder actualizar 2 estados al mismo tiempo
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

    getGifs({ keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [keyword]);

  if (gifs.loading) return <h2>"Cargando..."</h2>;
  return (
    <div className="ListOfGifs">
      {gifs.results.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
}
