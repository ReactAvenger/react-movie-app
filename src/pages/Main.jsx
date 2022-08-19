import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const OMBDB_API_URL = "https://www.omdbapi.com/";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "73539400";
const SEARCH_PLACEHOLDER = "batman";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (searchInput, searchType = "all") => {
    setLoading(true);
    if (!searchInput.length) searchInput = SEARCH_PLACEHOLDER;
    let SEARCH_URL = `${OMBDB_API_URL}?apikey=${API_KEY}&s=${searchInput}`;
    if (searchType !== "all") SEARCH_URL += `&type=${searchType}`;
    fetch(SEARCH_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`${OMBDB_API_URL}?apikey=${API_KEY}&s=${SEARCH_PLACEHOLDER}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {!loading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
}

export default Main;
