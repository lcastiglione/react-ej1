import { Helmet } from "react-helmet";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import useGifs from "hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>App Gif</title>
        <meta name="description" content="App Gif" />
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}
