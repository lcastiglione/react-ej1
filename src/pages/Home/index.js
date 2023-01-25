import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { gifs } = useGifs();

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
        <button>Buscar</button>
        <input
          placeholder="Buscar gif..."
          onChange={hundleChange}
          type="text"
          value={keyword}
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
