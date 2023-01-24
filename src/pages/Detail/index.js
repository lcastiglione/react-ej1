import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GifsContext from "../../contexts/GifsContext";
import Gif from "../../components/Gif";

export default function Detail() {
  let { id } = useParams();

  const { gifs, setGifs } = useContext(GifsContext);
  const gif = gifs.find((singleGif) => singleGif.id == id);

  console.log(gif);

  return <Gif {...gif} />;
}
