import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<SearchResults />} />
          <Route path="/gif/:id" element={<Detail />} />
        </Routes>
      </section>
    </div>
  );
}
