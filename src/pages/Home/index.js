import React, { useState } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";

const POPULAR_GIFS = ["Matrix", "Argentina", "Python", "Web"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${keyword}`, { replace: true });
  };

  const hundleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <input
          placeholder="Buscar gif..."
          onChange={hundleChange}
          type="text"
          value={keyword}
        />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Los Gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
