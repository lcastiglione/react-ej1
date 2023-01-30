import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const hundleChange = (evt) => {
    setKeyword(evt.target.value);
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
    </form>
  );
}

export default React.memo(SearchForm);
