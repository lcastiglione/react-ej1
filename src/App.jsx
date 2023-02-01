import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";

import Header from "components/Header";
import Login from "pages/Login";
import Register from "pages/Register";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import { UserContextProvider } from "contexts/UserContext";
import { GifsContextProvider } from "contexts/GifsContext";

import "./App.css";

const HomePage = React.lazy(() => import("pages/Home"));

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={null}>
            <section className="App-content">
              <Header />
              <Link to="/">
                <h1>Gif App</h1>
              </Link>
              <GifsContextProvider>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/search/" element={<SearchResults />} />
                  <Route
                    path="/search/:keyword/:rating?"
                    element={<SearchResults />}
                  />
                  <Route path="/gif/:id" element={<Detail />} />
                  <Route path="*" element={<h1>Error 404</h1>} />
                </Routes>
              </GifsContextProvider>
            </section>
          </Suspense>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}
