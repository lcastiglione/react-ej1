import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "contexts/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNexPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // Se obtiene la keyword. Si es null, se obtiene la última guardada en el storage y si no hay nada guardado, se busca 'random'
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNexPage, gifs, setPage };
}
