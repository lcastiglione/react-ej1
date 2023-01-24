import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

import { useParams } from "react-router-dom";

export default function ListOfGifs() {
  let { query } = useParams(); // Obtiene los parámetros pasados por url
  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(() => {
    // Se hace de esta forma para poder actualizar 2 estados al mismo tiempo
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

    getGifs({ query }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [query]);

  if (gifs.loading) return <h2>"Cargando..."</h2>;

  return (
    <div className="App">
      <section className="App-content">
        {gifs.results.map(({ id, title, url }) => (
          <Gif key={id} title={title} id={id} url={url} />
        ))}
      </section>
    </div>
  );
}
