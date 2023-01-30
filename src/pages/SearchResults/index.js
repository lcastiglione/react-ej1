import React, { useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import debounce from "just-debounce-it";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";

export default function SearchResults() {
  const { keyword } = useParams();
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  /*
  Infinit scroll
  debounce bloquea múltiples llamdas a una función por un cierto tiempo
  (en este caso 200mS) y la ejecuta una sola vez.
  */

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPages) => prevPages + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

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
      <div id="visor" ref={externalRef}></div>
    </>
  );
}
