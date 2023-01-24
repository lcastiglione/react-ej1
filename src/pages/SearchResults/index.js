import React, { useState, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import getGifs from "../../services/getGifs";

import { useParams } from "react-router-dom";

export default function SearchResults() {
  let { keyword } = useParams();
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
