import React from "react";
import "./gif.css";
import { Link } from "react-router-dom";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}
