import React, { useState } from "react";

function Search(props) {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") searchMovies(search, type);
  };

  const handleFilter = (event) => {
    let searchType = event.target.dataset.type;
    setType(searchType);
    searchMovies(search, searchType);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            SEARCH
          </button>
        </div>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}

export default Search;
