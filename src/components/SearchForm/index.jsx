import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];
const reducer = (state, param) => {
  return state;
};

function SearchForm({ initialKeyword = "", initialRating }) {
  //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(decodeURIComponent(initialRating));
  //const [times, setTimes] = useState(0);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    times: decodeURIComponent(initialRating),
  });

  const { keyword, times } = state;

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${keyword}/${rating}`, { replace: true });
  };

  const updateKeyword = (keyword) => {
    dispatch(keyword);
  };

  const hundleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form onSubmit={hundleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Buscar gif..."
        onChange={hundleChange}
        type="text"
        value={keyword}
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disable>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

export default React.memo(SearchForm);
