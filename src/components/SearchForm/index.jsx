import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm(
  { initialKeyword = "", initialRating = "g" } = null
) {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });
  const navigate = useNavigate();

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${keyword}/${rating}`, { replace: true });
  };

  const hundleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
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
