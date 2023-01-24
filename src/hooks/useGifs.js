﻿import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../contexts/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
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

  return { loading, gifs };
}
