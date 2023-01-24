import { useContext } from "react";
import GifsContext from "../contexts/GifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContext);
  return gifs;
}
