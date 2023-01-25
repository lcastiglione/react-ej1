import Gif from "components/Gif";
import "./listOfGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
}
