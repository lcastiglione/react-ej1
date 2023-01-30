import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import useSEO from "hooks/useSEO";
import Spinner from "components/Spinner";

export default function Detail() {
  let { id } = useParams();
  const { gif, isLoading, isError } = useSingleGif({ id });
  const title = gif ? gif.title : "";
  /*useSEO({ title, description: `Detail of ${title}` });*/

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  if (isError) return <Navigate to="/404" replace />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Detail of ${title}`} />
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
