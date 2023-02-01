import React from "react";
import { Link } from "react-router-dom";

import Fav from "components/Fav";

import "./gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="gif">
      <div className="gif-buttons">
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`} className="gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}
