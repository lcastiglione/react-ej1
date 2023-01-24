import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "../../components/ListOfGifs";
import Category from "../../components/Category";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Argentina", "Python", "Web"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { loading, gifs } = useGifs();

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
          <Category name="Categorias populares" options={POPULAR_GIFS} />
          <Category name="Mascotas" options={["Perros", "Gatos", "Hamster"]} />
        </div>
      </div>
    </>
  );
}
