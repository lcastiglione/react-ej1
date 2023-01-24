import React, { useCallback, useRef, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs";

import { useParams } from "react-router-dom";

export default function SearchResults() {
  let { keyword } = useParams();
  return (
    <div className="App-wrapper">
      <h3 className="App-title">{decodeURI(keyword)}</h3>
      <ListOfGifs keyword={keyword} />
    </div>
  );
}
