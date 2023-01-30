import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating }) {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(decodeURIComponent(initialRating));
  const navigate = useNavigate();

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${keyword}/${rating}`, { replace: true });
  };

  const hundleChange = (evt) => {
    setKeyword(evt.target.value);
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
    </form>
  );
}

export default React.memo(SearchForm);
