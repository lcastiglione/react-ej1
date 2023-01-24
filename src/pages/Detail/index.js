import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams(); // Obtiene los
  return <div>Detail: {id}</div>;
}
