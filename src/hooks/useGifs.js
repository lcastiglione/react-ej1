import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "contexts/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNexPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // Se obtiene la keyword. Si es null, se obtiene la última guardada en el storage y si no hay nada guardado, se busca 'random'
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keywordToUse, setGifs, keyword, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, rating, page, setGifs]);

  return { loading, loadingNexPage, gifs, setPage };
}
