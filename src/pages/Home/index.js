import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();
  const navigate = useNavigate();

  const hundleSubmit = useCallback(
    ({ keyword }) => {
      navigate(`/search/${keyword}`, { replace: true });
    },
    [navigate]
  );

  return (
    <>
      <SearchForm onSubmit={hundleSubmit} />
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
