import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";

export default function Detail() {
  let { id } = useParams();
  const { gif, isLoading, isError } = useSingleGif({ id });

  if (isLoading) return <Spinner />;
  if (isError) return <Navigate to="/404" replace />;
  if (!gif) return null;

  return (
    <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
