import React from "react";
import { useParams } from "react-router-dom";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail() {
  let { id } = useParams();

  const gifs = useGlobalGifs();
  const gif = gifs.find((singleGif) => singleGif.id == id);

  console.log(gif);

  return <Gif {...gif} />;
}
