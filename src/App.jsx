import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./contexts/StaticContext";
import { GifsContextProvider } from "./contexts/GifsContext";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <StaticContext.Provider
      value={{
        name: " Test Context",
      }}
    >
      <BrowserRouter>
        <div className="App">
          <section className="App-content">
            <h1>App</h1>
            <GifsContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/" element={<SearchResults />} />
                <Route path="/search/:keyword" element={<SearchResults />} />
                <Route path="/gif/:id" element={<Detail />} />
                <Route path="*" element={<h1>Error 404</h1>} />
              </Routes>
            </GifsContextProvider>
          </section>
        </div>
      </BrowserRouter>
    </StaticContext.Provider>
  );
}
