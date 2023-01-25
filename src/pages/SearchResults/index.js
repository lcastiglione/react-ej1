import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";

import { useParams } from "react-router-dom";

export default function SearchResults() {
  const { keyword } = useParams();
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  );
}
