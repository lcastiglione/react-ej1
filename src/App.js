import ListOfGifs from "./components/ListOfGifs"
import './App.css';
import {Link,Route} from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs query="metro"  />
        {/* <button onClick={()=>setGifs(DIFFERENTS_GIFS)}> Cambiar GIFs </button> */}
      </section>
    </div>
  );
}