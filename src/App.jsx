import ListOfGifs from "./components/ListOfGifs";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/Argentina'>Gifs de Argentina</Link>
        <Link to='/gif/Python'>Gifs de Python</Link>
        <Link to='/gif/metro'>Gifs de Metros</Link>
        <Routes>
          <Route path="/gif/:query" element={<ListOfGifs />} />
        </Routes>
      </section>
    </div>
  );
}
