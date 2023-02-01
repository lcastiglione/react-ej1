import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "components/Modal";
import Login from "components/Login";
import useUser from "hooks/useUser";

import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  const isFaved = favs.some((favId) => favId === id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <button onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
