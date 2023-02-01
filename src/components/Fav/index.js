import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "hooks/useUser";
import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLogged) return navigate("/login");
    addFav({ id });
  };
  const isFaved = favs.some((favId) => favId === id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <button onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
