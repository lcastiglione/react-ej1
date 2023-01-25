import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";

import { useParams } from "react-router-dom";

export default function SearchResults() {
  const { keyword } = useParams();
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNexPage = () => {
    setPage((prevPages) => prevPages + 1);
  };

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
      <br />
      <button onClick={handleNexPage}>Pág. siguiente</button>
    </>
  );
}
